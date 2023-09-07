import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Story.module.css";
import StoryProfileCard from "../../components/StoryProfileCard/StoryProfileCard";
import EpisodeStart from "../../components/EpisodeStart/EpisodeStart";

export default function Story() {
  return (
    <>
      <Header text="해녀 이야기" />
      <section className={styles.section}>
        <StoryProfileCard />
        <div className={styles.description}>
          <h5 className="h5">
            안녕 하우꽈? <br />
            나는 불가사리 해녀, 뉴성태야.
          </h5>
          <h5 className="h5">
            상군해녀가 눈에 잘 띄라고 <br />
            불가사리를 머리에 붙여주면서 생긴 별명이야.
          </h5>
        </div>
        <EpisodeStart />
      </section>
    </>
  );
}
