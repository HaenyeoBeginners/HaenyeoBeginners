import React from "react";
import Modal, { ModalID } from "../Modal";
import mapUrl from "../main_map.png";
import { Button } from "reactstrap";
import styles from "./BeforeReserveModal.module.css";

type Props = {
  onClick: (id: ModalID) => void;
};

export default function BeforeReserveModal({ onClick }: Props) {
  return (
    <Modal onClick={onClick}>
      <>
        <img src={mapUrl} alt="map" />
        <h5 className={styles.title}>하도 어촌 체험 마을</h5>
        <p className={styles.address}>
          제주특별자치도 제주시 구좌읍 하도리 22-10
        </p>
        <div className={styles.btnGroup}>
          <Button onClick={() => onClick(null)}>취소</Button>
          <Button
            onClick={() => {
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScbDkHvUM0-N8o31zZ06tOQ0aWDXMvNGjmcJyVtZk3ASCBkGw/viewform"
              );
              onClick("END_RESERVE");
            }}
          >
            예약
          </Button>
        </div>
      </>
    </Modal>
  );
}
