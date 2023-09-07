import React from "react";
import ProfileImage from "./profile5.png";
import styles from "./StoryProfileCard.module.css";
import { Badge } from "@goorm-dev/gds-goormthon";

export default function StoryProfileCard() {
  return (
    <div className={styles.card}>
      <div className={styles.avatarContainer}>
        <img src={ProfileImage} alt="" />
        <h6 className="h6">뉴성태</h6>
      </div>
      <div>
        <Badge shape="rounded-pill" className={styles.badge}>
          프로필
        </Badge>
        <p>
          “ 저는 불가사리 해녀입니다. ” <br />
          제주 구름톤 7기 신입 해녀
        </p>
      </div>
    </div>
  );
}
