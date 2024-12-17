import React from "react";
import TreeNode from "./TreeNode"
import styles from "../../css/tree/tree.module.css"
import dataset from "@/public/json/roles";

export default function Tree() {
  return <div className={styles.tree}>
    {dataset.children.map(node => node && <TreeNode key={node.id} {...node} />)}
  </div>
}
