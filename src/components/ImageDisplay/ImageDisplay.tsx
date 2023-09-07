import React from "react";
import styles from "./ImageDisplay.module.css";

type Props = {
  image: string;
};

export default function ImageDisplay({ image }: Props) {
  return <div className={`${styles.display} ${styles[image]}`}></div>;
}
