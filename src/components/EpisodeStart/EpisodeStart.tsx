import React from "react";
import styles from "./EpisodeStart.module.css";
import personImg from "./person.png";
import { Button } from "@goorm-dev/gds-goormthon";
import { useNavigate } from "react-router-dom";

export default function EpisodeStart() {
  const navigate = useNavigate();
  return (
    <div className={styles.episodeStart}>
      <div className={styles.bubble}>
        <p>나의 에피소드 세 가지를 소개해줄게! 얼른 따라오쇼!</p>
      </div>
      <div className={styles.person}>
        <img src={personImg} alt="person" />
      </div>
      <Button
        color="primary"
        size="xl"
        className={styles.personBtn}
        onClick={() => navigate("/story/1/detail")}
      >
        여정 시작
      </Button>
    </div>
  );
}
