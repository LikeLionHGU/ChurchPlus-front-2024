import React from "react";
import styled from "styled-components";
import { BlueText } from "../CreateGroupPage/Text";
import CancelIcons from "../../assets/Icons/cancel.svg";
import AddTeamIcons from "../../assets/Icons/TeamAddIcon.svg";
import CopyIcons from "../../assets/Icons/copy.svg";

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
  background: rgba(158, 158, 158, 0.9);
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 35px;
  width: 1110px;
  height: 643px;
`;

const ModalWrapper = styled.div`
  width: 938px;
  height: 522px;
  margin-top: 52px;
  margin-left: 94px;
`;

const ModalTop = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 25rem;
  height: 2.5rem;
  font-size: 36px;
`;

const CloseModal = styled.div`
  cursor: pointer;

  img {
    height: 41px;
    float: right;
  }
`;

const ModalBody = styled.div`
  //스크롤 기능 적용
  height: 430px;
  font-size: 22px;
  border: 1px solid red;
`;

const Text = styled.div`
  margin-top: 20px;
`;

const TeamName = styled.div`
  margin-top: 15px;
  background-color: #eeeeee;
  height: 56px;
  width: 379px;
  border-radius: 10px;
`;

const AddTeam = styled.div`
  margin-top: 15px;

  img {
    cursor: pointer;
  }
`;

const InvitationCode = styled.div`
  font-family: "GmarketSansLight";
  margin-top: 15px;

  img {
    cursor: pointer;
    margin-left: 9px;
    vertical-align: middle;
  }
`;

const SaveBtn = styled.button`
  cursor: pointer;
  font-family: GmarketSansMedium;
  font-size: 22px;
  background-color: #3e5692;
  width: 103px;
  height: 45px;
  border-radius: 14px;
  border: none;
  color: white;
`;

function TeamManagementModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <Modal>
      <Overlay onClick={onClose} />
      <ModalContent>
        <ModalWrapper>
          <ModalTop>
            <Title>
              <BlueText>팀 관리</BlueText>
            </Title>
            <CloseModal>
              {" "}
              <img onClick={onClose} src={CancelIcons} alt="모달 닫기" />
            </CloseModal>
          </ModalTop>
          <ModalBody>
            <Text>팀 이름</Text>
            <TeamName></TeamName>
            <Text>아이콘</Text>
            <AddTeam>
              <img src={AddTeamIcons} alt="팀 추가" />
            </AddTeam>
            <Text>초대코드</Text>
            <InvitationCode>
              100432
              <img src={CopyIcons} alt="코드 복사" />
            </InvitationCode>
          </ModalBody>
          <SaveBtn onClick={onClose}>저장</SaveBtn>
        </ModalWrapper>
      </ModalContent>
    </Modal>
  );
}

export default TeamManagementModal;
