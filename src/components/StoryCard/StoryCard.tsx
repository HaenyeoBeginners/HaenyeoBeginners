import React from "react";
import styles from "./StoryCard.module.css";

type Props = {
  children: React.ReactElement;
};

export default function StoryCard({ children }: Props) {
  return <div>{children}</div>;
}
