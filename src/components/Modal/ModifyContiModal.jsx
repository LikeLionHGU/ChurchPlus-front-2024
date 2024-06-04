import React, { useEffect, useState } from "react";
import styled from "styled-components";
import exitBtnIcon from "../../assets/Icons/ExitBtn.svg";
import binIcon from "../../assets/Icons/Bin.svg";
import shareIcon from "../../assets/Icons/ShareConti.svg";
import printIcon from "../../assets/Icons/printPage.svg";
import editBtn from "../../assets/Icons/EditBtn.svg";
import saveBtn from "../../assets/Icons/SaveBtn.svg";

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
  background: rgba(158, 158, 158, 0.8);
  cursor: pointer;
`;

const ContiModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 35px;
  width: 1100px;
  height: 643px;
`;

const ModalTop = styled.div`
  display: flex;
  margin-top: 35px;
  margin-bottom: 9px;
  height: 40px;
`;

const ContiTitle = styled.div`
  margin-left: 480px;
  font-size: 24px;
  font-family: "GmarketSansLight";
`;

const Icons = styled.div`
  margin-left: auto;
  margin-right: 40px;

  img {
    cursor: pointer;
    margin-right: 15px;
  }
`;

const ModalContent = styled.div`
  display: flex;
`;

const ContiImage = styled.div`
  margin-left: 140px;
  margin-right: 121px;
  width: 360px;
  height: 480px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-position: top;
  }
`;

const Icon2 = styled.div`
  display: flex;
  justify-content: right;
  margin-bottom: 24px;
  padding-right: 35px;
`;

const Img = styled.img`
  height: 24px;
  width: 24px;
  margin-left: 16px;
  cursor: pointer;
`;

const ContiInfo = styled.div`
  width: 419px;
  height: 500px;
`;

const Btn = styled.img`
  cursor: pointer;
  margin-top: 75px;
  margin-left: 355px;
  width: 79px;
  height: 51px;
`;

const BoldText = styled.div`
  font-size: 18px;
  padding-bottom: 12px;
`;

const LightText = styled.div`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 35px;
  color: ${({ isEditable }) => (isEditable ? "gray" : "#0d2030")};
`;

const EditableInput = styled.input`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 35px;
  color: gray;
  border: none;
  /* border-bottom: 1px solid gray; */
  outline: none;
  width: 419px;
`;

export default function ModifyContiModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [contiData, setContiData] = useState({
    title: "예수로 살리",
    key: "G Key",
    version: "마커스",
    link: "https://github.com/LikeLionHGU/ChurchPlus-front-2024",
  });

  const toggleModifyContiModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const toggleEditMode = () => {
    setIsEditable((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContiData({
      ...contiData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      {isModalOpen && (
        <Modal>
          <Overlay onClick={toggleModifyContiModal} />
          <ContiModal>
            <ModalTop>
              <ContiTitle>예수로 살리</ContiTitle>
              <Icons>
                <img
                  onClick={toggleModifyContiModal}
                  src={exitBtnIcon}
                  alt="캔슬 아이콘"
                />
              </Icons>
            </ModalTop>
            <ModalContent>
              <ContiImage>
                <img
                  src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfNjgg/MDAxNjA3ODA5NjA0NTM2.YM6pUqS1a5iOpS6E6qgmXv-OY2NpxuLqzKKw7zDv8-Yg.YdBycMqSyFsaoOD1SSXqqfYiRucys1Ysb7gN3f7_Eqsg.JPEG.zzseulzz/%EC%98%88%EC%88%98%EB%A1%9C_%EC%82%B4%EB%A6%AC.jpg?type=w800"
                  alt="Conti Image"
                />
              </ContiImage>

              <ContiInfo>
                <Icon2>
                  <Img src={binIcon} alt="쓰레기통 아이콘" />
                  <Img src={shareIcon} alt="공유 아이콘" />
                  <Img src={printIcon} alt="프린트 아이콘" />
                </Icon2>
                <BoldText>곡 제목</BoldText>
                {isEditable ? (
                  <EditableInput
                    name="title"
                    value={contiData.title}
                    onChange={handleChange}
                  />
                ) : (
                  <LightText>{contiData.title}</LightText>
                )}
                <BoldText>곡 코드</BoldText>
                {isEditable ? (
                  <EditableInput
                    name="key"
                    value={contiData.key}
                    onChange={handleChange}
                  />
                ) : (
                  <LightText>{contiData.key}</LightText>
                )}
                <BoldText>곡 버전</BoldText>
                {isEditable ? (
                  <EditableInput
                    name="version"
                    value={contiData.version}
                    onChange={handleChange}
                  />
                ) : (
                  <LightText>{contiData.version}</LightText>
                )}
                <BoldText>영상 링크</BoldText>
                {isEditable ? (
                  <EditableInput
                    name="link"
                    value={contiData.link}
                    onChange={handleChange}
                  />
                ) : (
                  <LightText>{contiData.link}</LightText>
                )}
                <Btn
                  src={isEditable ? saveBtn : editBtn}
                  alt="수정버튼"
                  onClick={toggleEditMode}
                />
              </ContiInfo>
            </ModalContent>
          </ContiModal>
        </Modal>
      )}
      <button onClick={toggleModifyContiModal}>콘티수정모달</button>
    </>
  );
}
