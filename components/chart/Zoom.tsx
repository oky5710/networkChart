import styles from "../../css/zoom.module.css";
import {useRolesStore} from "@/store/iam";
import {useCallback, useState} from "react";

export default function Zoom({min = 10, max = 500}: { min?: number, max?: number }) {
  const zoom = useRolesStore(state => state.zoom);
  const setRoles = useRolesStore(state => state.setRoles);
  const [error, setError] = useState<string>("");
  const handleZoom = useCallback((num: number) => {
    if (num < min) {
      setError(`${min}보다 큰 수를 입력해주세요.`);
      if (num >= 0) {
        setRoles("zoom", num);
      }
    } else if (num > max) {
      setError(`${max}보다 작은 수를 입력해주세요.`);
    } else {
      setError("");
      setRoles("zoom", num);
    }
  }, []);
  return <div className={styles.zoom}>
    <button
      type={"button"}
      title={"축소"}
      onClick={() => {
        handleZoom(Number(zoom) - 10);
      }}
    >-
    </button>
    <div className={styles.zoomInput}>
      <input type="text" value={zoom} readOnly/>
      <span>%</span>
      {error && <div className={styles.error}>{error}</div>}
    </div>
    <button
      type={"button"}
      title={"확대"}
      onClick={() => {
        handleZoom(Number(zoom) + 10);
      }}
    >+
    </button>
  </div>
}
