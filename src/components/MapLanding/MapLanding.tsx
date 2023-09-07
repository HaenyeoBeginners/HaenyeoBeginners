import React from "react";
import styles from "./MapLanding.module.css";
import { useNavigate } from "react-router-dom";

export default function MapLanding() {
  const navigate = useNavigate();
  return (
    <div className={styles.landing} onClick={() => navigate("/map")}>
      <h4 className={`h4 ${styles.title}`}>
        제주 여기 저기 모여있는, 애기 상군
      </h4>
      <p className={`h6 ${styles.paragraph}`}>
        거친 바닷속을 헤엄치는 신입 해녀의 여정을 함께해요!
      </p>
      <div className={styles.mapImageContainer}></div>
    </div>
  );
}
