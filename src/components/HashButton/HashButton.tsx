import React from "react";
import { Button } from "reactstrap";
import styles from "./HashButton.module.css";

type Props = {
  text: string;
  className: string;
  onClick: (btn: string) => void;
  id: number;
};

export default function HashButton({ text, className, onClick, id }: Props) {
  return (
    <Button
      className={`${styles.hashBtn} ${styles[className]}`}
      onClick={onClick}
      id={String(id)}
    >
      {text}
    </Button>
  );
}
