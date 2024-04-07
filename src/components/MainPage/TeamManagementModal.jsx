import React from "react";
import styled from "styled-components";

const modalStyles = `
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`;

const Modal = styled.div`
  ${modalStyles}
  z-index: 3;
`;

const Overlay = styled.div`
  ${modalStyles}
  background: rgba(166, 166, 170, 0.8);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  line-height: 1.4;
  background: #e8e8ef;
  padding: 2rem;
  border-radius: 1.5rem;
  width: 45rem;
  height: 38rem;
`;

const ModalTop = styled.div`
  display: flex;
  font-size: 22px;
`;

const Title = styled.div`
  text-align: center;
  width: 25rem;
  height: 2.5rem;
  margin-left: 6rem;
  margin-right: 3.9rem;
  border-bottom: 1px solid #c1c1c1;
`;

const ModalBody = styled.div`
  display: flex;
`;

const CloseModal = styled.div`
  cursor: pointer;
  img {
    height: 3rem;
  }
`;

function TeamManagementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal>
      <Overlay onClick={onClose} />
      <ModalContent>
        <ModalTop>
          <CloseModal></CloseModal>
          <Title>모달 제목</Title>
        </ModalTop>
        <ModalBody>모달 내용</ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TeamManagementModal;
