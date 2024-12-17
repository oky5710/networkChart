import styles from "../../css/sidePopup.module.css";
import {SidePopupType} from "@/types/type";

export default function SidePopup({id}: SidePopupType) {
  return <div className={styles.sidePopup}>
    <h2>{id}</h2>
    <h3>상세 내용</h3>
  </div>
}
