import {useRolesStore} from "@/store/iam";
import React, {RefObject, useCallback, useEffect, useMemo, useRef, useState} from "react";
import styles from "../../css/chart/networkChart.module.css"
import * as d3 from "d3";
import Zoom from "@/components/chart/Zoom";
import {RolesType, SidePopupType} from "@/types/type";
import { useResizeObserver } from "usehooks-ts";
import SidePopup from "@/components/chart/SidePopup";
import {svg} from "d3";

interface NodeType extends d3.SimulationNodeDatum {
  id: string;
  type: string;
  data?: NodeType;
  depth?: number;
  index?: number;
  vx?: number;
  vy?: number;
  x?: number;
  y?: number;
  visible: boolean;
}
type LinkType = {
  source: string | NodeType;
  target: string | NodeType;
  visible: boolean;
}
type CoordinateType = {x: number, y: number};

export default function NetworkChart({radius = 5, size = 10}: { radius?: number; size?: number }) {
  const selectedData = useRolesStore(state => state.selectedData);
  const setRoles = useRolesStore(state => state.setRoles);
  const clicked = useRolesStore(state => state.clicked);
  const zoom = useRolesStore(state => state.zoom);
  const svgRef = useRef(null);
  const divRef = useRef<HTMLElement>(null as unknown as HTMLElement);
  const [dataset, setDataset] = useState<{
    nodes: Array<NodeType>,
    links: Array<LinkType>,
  }>({nodes: [], links: []});
  const [popup, setPopup] = useState<SidePopupType>({
    type: "",
    id: ""
  });
  const [open, setOpen] = useState<boolean>(false);
  const { width = 0, height = 0 } = useResizeObserver({
    ref: divRef,
    box: "border-box",
  });
  const strength = useMemo<number>(() => zoom <= 100 ? Math.sin((Math.PI / 2) * (zoom / 100)) * -150 + 20 : -zoom * 5, [zoom]);
  const isVisible = ({start, end, x, y} : {start: CoordinateType; end: CoordinateType; x: number; y: number;}) =>  {
    return x - 50 > start.x && y - 50 > start.y && x < end.x  && y < end.y;
  };
  const filterDataset = (data: {
    nodes: Array<NodeType>,
    links: Array<LinkType>,
  }) => {
    const viewBoxStr = d3.select(svgRef.current).attr("viewBox");
    if(viewBoxStr && width && height) {
      const viewBox = viewBoxStr.split(",");
      const start = {x: Number(viewBox[0]) - width/2, y: Number(viewBox[1]) - height/2};
      const end = {x: width, y: height};
      const nodes: Array<NodeType> = data.nodes.map((node) => {
        const x = node?.x ?? 0;
        const y = node?.y ?? 0;
        return {
          ...node,
          visible: isVisible({ start, end, x, y })
        }
      });
      const links = data.links.map((link) => {
        const target: string = typeof link?.target === "object" ? link.target.id : link.target;
        const source: string = typeof link?.source === "object" ? link.source.id : link.source;
        return {
          ...link,
          visible: nodes.some(node => node.visible && (target === node.id || source === node.id)),
        }
      })
      return { nodes, links };
    }
    return data;
  }
  const convertData = useCallback((root: RolesType, scale: number) => {
    console.log(root)
    const result: {
      nodes: NodeType[];
      links: LinkType[];
    } = {
      nodes: [],
      links: []
    }
    const getNodes = (n: RolesType) => {
      const isExist = n.id === "RootAccount" || result.nodes.some(node => n.id === node.id);
      const depth: number = n.type === "Account" ? 1 : n.type === "User"? 2: n.type === "Role"? 3: 4;

      if(!isExist) {
        const available = (scale > 90) ? depth < 5 :  (scale > 70) ? depth < 4 : (scale > 50) ? depth < 3 : depth < 2;
        if(available){
          result.nodes.push({
            id: n.id,
            type: n.type,
            depth,
            visible: true,
          })
        }
      }
      if(n?.children) {
        n.children.forEach((child) => {
          const childDepth: number = child.type === "Account" ? 1 : child.type === "User"? 2 : child.type === "Role"? 3 : 4;
          const available = (scale > 90) ? depth < 5 && childDepth < 5 :  (scale > 70) ? depth < 4 && childDepth < 4 : (scale > 50) ? depth < 3 && childDepth < 3 : depth < 2 && childDepth < 2;
          if(n.id !== "RootAccount" && available){
            result.links.push({
              source: n.id,
              target: child.id,
              visible: true,
            });
          }
          getNodes(child);
        })
      }
    }
    if(root?.children){
      getNodes(root);
    }
    const simulation: d3.Simulation<NodeType, LinkType> = d3.forceSimulation(result.nodes)
      .force(
        "link",
        d3.forceLink<NodeType, LinkType>(result.links)
          .id((d: NodeType) => d.id) // id 타입 명확화
          .distance(0)
          .strength(0.1)
      )
      .force("charge", d3.forceManyBody().strength(Math.min(strength, -10)))
      .force("x", d3.forceX())
      .force("y", d3.forceY());
    for (let i = 0; i < 300; i++) { // 반복 횟수는 레이아웃 안정화에 따라 조정
      simulation.tick();
    }
    return filterDataset(result);
  }, [strength]);

  const calcR = useMemo<number>(() => zoom > 100 ? radius * zoom / 100 * 2 : radius, [zoom]);
  const fontSize = useMemo<number>(() => zoom > 100 ? 6 * zoom / 100 + 5 : size, [zoom]);
  useEffect(()=> {
    setRoles("zoom", 100);
    if(width && height) {
      d3.select(svgRef.current).attr("viewBox", [-width / 2, -height / 2, width, height]);
    }
  }, [selectedData, width, height]);
  useEffect(()=> {
    setDataset(convertData(selectedData, zoom));
  }, [selectedData, zoom]);
  const getOpacity = ({target, source}: {target: string | NodeType, source: string | NodeType}) => {
    const targetId = typeof target === "object" ? target.id : target;
    const sourceId = typeof source === "object" ? source.id : source;
    return targetId === clicked || sourceId === clicked ? 1 : 0.1;
  }
  const updateChart = useCallback(({nodes, links}:{nodes: NodeType[]; links: LinkType[]}) => {
    if (!svgRef.current) return;
    console.log(nodes)
    const svg = d3.select<SVGSVGElement, unknown>(svgRef.current);
    // Append links.
    if(svg.selectAll(".links").size() === 0) {
      svg.append("g").classed("links", true);
    }
    svg.select(".links")
      .selectAll("line")
      .data(links.filter(link => link.visible))
      .join(
        enter => {
          enter
            .append("line")
            .attr("stroke", "#999")
            .attr("stroke-opacity", 0.1)
            .attr("x1", (d) => typeof d.source === "object" && d.source?.x ? d.source.x : 0)
            .attr("y1", (d) => typeof d.source === "object" && d.source?.y ? d.source.y : 0)
            .attr("x2", (d) => typeof d.target === "object" && d.target?.x ? d.target.x : 0)
            .attr("y2", (d) => typeof d.target === "object" && d.target?.y ? d.target.y: 0)
          return enter.select("line");
        },
        update => {
          update
            .style("stroke-opacity", (d: LinkType) => {
              const {target, source} = d;
              return getOpacity({target, source});
            })
            .attr("x1", (d) => typeof d.source === "object" && d.source?.x ? d.source.x : 0)
            .attr("y1", (d) => typeof d.source === "object" && d.source?.y ? d.source.y : 0)
            .attr("x2", (d) => typeof d.target === "object" && d.target?.x ? d.target.x : 0)
            .attr("y2", (d) => typeof d.target === "object" && d.target?.y ? d.target.y: 0)
          return update;
        },
        exit => {exit.remove()}
      );
    // Append nodes.
    if(svg.selectAll(".nodes").size() === 0) {
      svg.append("g").classed("nodes", true);
    }
    const getColor = (depth:number) => {
      if (depth === 4) {
        return "#7950f2";
      }
      if (depth === 3) {
        return "#228be6";
      }
      if (depth === 2) {
        return "#22b8cf";
      }
      return "#fab005";
    }
    const node = svg.select(".nodes")
      .selectAll("g")
      .data(nodes.filter(node => node.visible))
      .join(
        enter => {
          const g = enter.append("g");
          g.append("circle")
            .attr("r", calcR)
            .attr("fill", d => getColor(d?.depth ?? 1))
            .attr("cx", d => d?.x ?? 0)
            .attr("cy", d => d?.y ?? 0)
            .style("stroke", d => getColor(d?.depth ?? 1))
            .style("stroke-width", 10)
            .style("stroke-opacity", 0)
          g.append("text")
            .text(d => d.id)
            .style("text-anchor", "middle")
            .style("fill", "#868e96")
            .style("font-size", `${fontSize}px`)
            .attr("x", d => d?.x ?? 0)
            .attr("y", d => (d?.y ?? 0) + radius + 10)
          return g
        },
        update => {
          update.select("circle")
            .attr("r", calcR)
            .attr("fill", d => getColor(d?.depth ?? 1))
            .style("stroke", d => getColor(d?.depth ?? 1))
            .attr("cx", d => d?.x ?? 0)
            .attr("cy", d => d?.y ?? 0)
            .style("stroke-opacity", (d: NodeType) => (typeof d === "object" && d.id === clicked) ? 0.3 : 0);
          update.select("text")
            .text(d => d.id)
            .style("font-size", `${fontSize}px`)
            .attr("x", d => d?.x ?? 0)
            .attr("y", d => (d?.y ?? 0) + calcR + 10)
          return update
        },
        exit => {
          exit.remove();
        }
      );
    node.on("click", (e, d) => {
      if(clicked === d.id) {
        setPopup({
          id: d.id,
          type: d.type,
        })
        setOpen(true);
      } else {
        setRoles("clicked", d.id);
      }
    })
  }, [calcR, clicked, fontSize])
  useEffect(() => {
    if (divRef.current) {
      if (!svgRef.current) return;
      let dragStart = {x: 0, y: 0};
      let viewBoxStart = {x: -width / 2, y: -height / 2};
      const svg = d3.select<SVGSVGElement, unknown>(svgRef.current)
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-width / 2, -height / 2, width, height]);
      svg
        .call(
          d3.drag<SVGSVGElement, unknown>()
            .on("start", (event: d3.D3DragEvent<SVGSVGElement, unknown, unknown>) => {
              if (svgRef.current) {
                const viewBox = d3.select<SVGSVGElement, unknown>(svgRef.current).attr("viewBox").split(",");
                viewBoxStart = {
                  x: Number(viewBox[0]),
                  y: Number(viewBox[1])
                }
              }
              const {x, y} = event;
              dragStart = {x, y};
            })
            .on("drag", (event: d3.D3DragEvent<SVGSVGElement, unknown, unknown>) => {
              const {x, y} = event;
              svg
                .attr("viewBox", [viewBoxStart.x + (dragStart.x - x), viewBoxStart.y + (dragStart.y - y), width, height]);
              setDataset(prev => filterDataset(prev));
            })
        );
    }
  }, [width, height]);

  useEffect(() => {
    console.log(dataset)
    updateChart(dataset);
  }, [dataset, updateChart]);

  return <div className={styles.networkChart} ref={divRef as RefObject<HTMLDivElement>}>
    <Zoom/>
    <svg ref={svgRef}></svg>
    {open && <SidePopup {...popup} />}
  </div>
}
