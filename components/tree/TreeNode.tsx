import {useRolesStore} from "@/store/iam";
import {RolesType} from "@/types/type";
import styles from "../../css/tree/treeNode.module.css"
import {useEffect} from "react";

export default function TreeNode(node: RolesType) {
  const setRoles = useRolesStore(state => state.setRoles);
  const selectedData = useRolesStore(state => state.selectedData);
  useEffect(() => {
    setRoles("zoom", 100)
  }, [selectedData]);
  return <button
    type={"button"}
    className={selectedData.id === node.id ? `${styles.treeNode} ${styles.active}` : styles.treeNode}
    onClick={() => {
      setRoles("selectedData", node)
  }}>
    {node.id} {`(${node?.children ? node?.children.length : 0})`}
  </button>
}
