import React, { useEffect } from "react";
import styles from "./Modal.module.css";

export type ModalID = "BEFORE_RESERV" | "END_RESERVE" | null;

const onScroll = (e: any) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
};

type Props = {
  onClick: (id: ModalID) => void;
  children: React.ReactElement;
};

export default function Modal({ onClick, children }: Props) {
  const handleClick = (e: any) => {
    if (e.target === e.currentTarget) {
      onClick(null);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onScroll, {
      passive: false,
    });

    return () => window.removeEventListener("wheel", onScroll);
  });

  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.modal}>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
