import React from "react";
import { Container } from '@goorm-dev/gds-goormthon';
import './StoryStyle.css';
import { Button, Modal, ModalBody, ModalHeader } from "reactstrap";
import Sheet from 'react-modal-sheet';
import { useState } from 'react';
import map from './modal_map.png';
import haenyeo from './haenyeo.png';


export default function Story() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(prev => !prev);


  const handleReservationClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLScbDkHvUM0-N8o31zZ06tOQ0aWDXMvNGjmcJyVtZk3ASCBkGw/viewform')
    setOpenModal(true);
  }

  return(
      <Container className="center">
        <h1 className="title" >해녀 이야기</h1>
        <h1 className="slider-container">
          <Button className="reservation-btn" block size='xl'color='primary' onClick={() => setOpen(true)}>예약하기</Button>
          <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
            <Sheet.Container>
            <Sheet.Header />
            <Sheet.Content>
              <>
                {<img src = {map} /> }
                <h3 className="place">성산 해녀의 집</h3>
                <h4 className="address">제주시 첨단로 241길</h4>
                <Button className="primary-btn" id ="open_modal" onClick={handleReservationClick} >예약하기</Button>
              </>
            </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
          </Sheet>
        </h1>
        <Modal isOpen={isOpenModal} toggle={toggle} centered zIndex={99999999}>
          <img src ={haenyeo} className ="haeonyeoImage"/>
          <ModalHeader className = "reservationDone">예약이 완료되었습니다.<br></br>예약날에 만나요!</ModalHeader>
          <ModalBody className="primary-btn">
            <Button  onClick={() => setOpen(true)}>확인</Button>
          </ModalBody>
        </Modal>
      </Container>
      
  )
}
