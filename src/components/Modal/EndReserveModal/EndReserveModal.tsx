import React from "react";
import Modal, { ModalID } from "../Modal";
import profileImg from "../profile3.png";
import { Button } from "@goorm-dev/gds-goormthon";
import { useNavigate } from "react-router-dom";
import styles from "./EndReserveModal.module.css";

type Props = {
  onClick: (id: ModalID) => void;
};

export default function EndReserveModal({ onClick }: Props) {
  const navigate = useNavigate();

  return (
    <Modal onClick={onClick}>
      <div className={styles.modalContainer}>
        <div className={styles.wrapper}>
          <img src={profileImg} alt="profile" />
          <p>예약이 완료되었습니다.</p>
          <p>예약날에 만나요!</p>
        </div>
        <div className={styles.container}>
          <Button
            onClick={() => {
              onClick(null);
              navigate("/");
            }}
            className={styles.btn}
          >
            확인
          </Button>
        </div>
      </div>
    </Modal>
  );
}
