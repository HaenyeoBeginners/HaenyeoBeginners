import React, { useState } from "react";
import HashButton from "../HashButton/HashButton";
import styles from "./HashButtonGroup.module.css";

const BTN_GROUP = ["#쌩신입", "#해린이", "#최연소", "#이직이"];

type Props = {
  onClick: (id: number) => void;
  className?: string;
  transparent?: boolean;
  initClickedBtn?: boolean;
};

export default function HashButtonGroup({
  onClick: onHashButtonClick,
  className,
  transparent,
  initClickedBtn,
}: Props) {
  const [clickedBtn, setClickedBtn] = useState(initClickedBtn ? "#쌩신입" : "");

  const onClick = (e: any) => {
    setClickedBtn(e.target.textContent);
    onHashButtonClick(e.target.id);
  };

  return (
    <nav className={`${styles.hashBtns} ${className}`}>
      {BTN_GROUP.map((g, index) => (
        <HashButton
          text={g}
          key={index}
          className={
            clickedBtn === g && transparent
              ? "active"
              : clickedBtn === g && !transparent
              ? "active-not-transparent"
              : ""
          }
          onClick={onClick}
          id={index}
        />
      ))}
    </nav>
  );
}
