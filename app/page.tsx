"use client"
import React from "react";
import Tree from "@/components/tree/Tree";
import NetworkChart from "@/components/chart/NetworkChart";
import styles from "../css/page.module.css"


// name이 unique 하다고 가정

export default function Home() {
  return (
    <div className={styles.page}>
      <Tree/>
      <NetworkChart/>
    </div>
  );
}
