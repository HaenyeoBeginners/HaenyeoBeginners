import React, { useState } from "react";
import HashButton from "../HashButton/HashButton";
import styles from "./HashButtonGroup.module.css";

const BTN_GROUP = ["#쌩신입", "#해린이", "#최연소", "#이직이"];

type Props = {
  onClick: (id: number) => void;
};

export default function HashButtonGroup({ onClick: onHashButtonClick }: Props) {
  const [clickedBtn, setClickedBtn] = useState("");

  const onClick = (e: any) => {
    setClickedBtn(e.target.textContent);
    onHashButtonClick(e.target.id);
  };

  return (
    <nav className={styles.hashBtns}>
      {BTN_GROUP.map((g, index) => (
        <HashButton
          text={g}
          key={index}
          className={clickedBtn === g ? "active" : ""}
          onClick={onClick}
          id={index}
        />
      ))}
    </nav>
  );
}
