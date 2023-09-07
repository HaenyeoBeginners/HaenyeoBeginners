import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Modal, { ModalID } from "../components/Modal/Modal";
import mapImage from "./main_map.png";
import { Button } from "@goorm-dev/gds-goormthon";
import BeforeReserveModal from "../components/Modal/BeforeReserveModal/BeforeReserveModal";
import EndReserveModal from "../components/Modal/EndReserveModal/EndReserveModal";

type Props = {
  modalType: ModalID;
  onClick: (btn: ModalID) => void;
};

export default function Layout({ modalType, onClick }: Props) {
  return (
    <>
      <Outlet />
      {modalType === "BEFORE_RESERV" && (
        <BeforeReserveModal onClick={onClick} />
      )}
      {modalType === "END_RESERVE" && <EndReserveModal onClick={onClick} />}
    </>
  );
}
