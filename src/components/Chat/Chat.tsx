import React from "react";
import styles from "./Chat.module.css";

type Props = {
  image: string;
  title: string;
  name: string;
  chat: string;
  bubbleColor: "white" | "blue";
  textColor: "white" | "blue";
  reverse: boolean;
};

export default function Chat({
  image,
  title,
  name,
  chat,
  bubbleColor,
  textColor,
  reverse,
}: Props) {
  return (
    <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
      <div className={`${styles.avatar} ${reverse ? styles.reverse : ""}`}>
        <img src={image} alt={name} />
        <h6>{title}</h6>
        <h6>{name}</h6>
      </div>
      <div
        className={`${styles.bubble} ${
          bubbleColor === "blue" ? styles.blue : styles.white
        }`}
      >
        {chat}
      </div>
    </div>
  );
}
