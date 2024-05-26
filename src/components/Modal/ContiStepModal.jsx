import React, { useEffect, useState } from "react";
import styled from "styled-components";
import saveBtn from "../../assets/Icons/SaveBtn.svg";
import { BlueText } from "../CreateGroupPage/Text";

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
  /* border: 1px solid green; */
  margin-top: 35px;
  margin-bottom: 35px;
  height: 40px;
`;

const ContiTitle = styled.div`
  /* border: 1px solid red; */
  margin-left: 480px;
  font-size: 24px;
  font-family: "GmarketSansLight";
`;

const ContiNumInfo = styled.div`
  font-size: 24px;
  margin-left: auto;
  margin-right: 55.5px;
`;

const ModalContent = styled.div`
  display: flex;
`;

const ContiImage = styled.div`
  margin-left: 150px;
  margin-right: 90px;
  width: 350px;
  height: 470px;

  /* border: 1px solid #5c39a2; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-position: top;
  }
`;

const ContiInfo = styled.div`
  padding-top: 10px;
  /* border: 1px solid red; */
  width: 419px;
  height: 500px;

  img {
    cursor: pointer;
    margin-left: 355px;
    width: 79px;
    height: 51px;
  }

  textarea {
    font-family: "GmarketSansLight";
    font-size: 16px;
    height: 80px;
    width: 300px;
    border: 0.9px solid gray;
    border-radius: 10px;
    resize: none;
  }

  textarea::placeholder {
    padding-top: 10px;
    padding-left: 14px;
  }
`;

const BoldText = styled.div`
  font-size: 18px;
  padding-bottom: 10px;
`;
const LightText = styled.div`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 25px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export default function ContiStepModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleContiStepModal = () => {
    setIsModalOpen((prevState) => !prevState);
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
          <Overlay onClick={toggleContiStepModal} />
          <ContiModal>
            <ModalTop>
              <ContiTitle>예수로 살리</ContiTitle>
              <ContiNumInfo>
                현재 <BlueText>2</BlueText>곡이 담겨있어요
              </ContiNumInfo>
            </ModalTop>
            <ModalContent>
              <ContiImage>
                <img
                  src="https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfNjgg/MDAxNjA3ODA5NjA0NTM2.YM6pUqS1a5iOpS6E6qgmXv-OY2NpxuLqzKKw7zDv8-Yg.YdBycMqSyFsaoOD1SSXqqfYiRucys1Ysb7gN3f7_Eqsg.JPEG.zzseulzz/%EC%98%88%EC%88%98%EB%A1%9C_%EC%82%B4%EB%A6%AC.jpg?type=w800"
                  alt="Conti Image"
                />
              </ContiImage>
              <ContiInfo>
                <BoldText>곡 제목</BoldText>
                <LightText>예수로 살리</LightText>
                <BoldText>곡 코드</BoldText>
                <LightText>G Key</LightText>
                <BoldText>곡 버전</BoldText>
                <LightText>마커스</LightText>
                <BoldText>영상 링크</BoldText>
                <LightText>
                  <Link
                    href="https://github.com/LikeLionHGU/ChurchPlus-front-2024"
                    target="_blank"
                  >
                    https://github.com/LikeLionHGU/ChurchPlus-front-2024
                  </Link>
                </LightText>
                <BoldText>메모</BoldText>
                <textarea placeholder="메모를 자유롭게 입력하세요"></textarea>
                <img src={saveBtn} alt="저장버튼" />
              </ContiInfo>
            </ModalContent>
          </ContiModal>
        </Modal>
      )}
      <button onClick={toggleContiStepModal}>콘티스탭모달</button>
    </>
  );
}
