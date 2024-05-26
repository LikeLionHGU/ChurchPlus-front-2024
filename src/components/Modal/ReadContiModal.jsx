import React, { useEffect, useState } from "react";
import styled from "styled-components";
import shareIcon from "../../assets/Icons/ShareConti.svg";
import printIcon from "../../assets/Icons/printPage.svg";

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

const Icons = styled.div`
  margin-left: auto;
  margin-right: 40px;

  img {
    cursor: pointer;
    margin-left: 15px;
  }
`;

const ModalContent = styled.div`
  display: flex;
`;

const ContiImage = styled.div`
  margin-left: 150px;
  margin-right: 121px;
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
  padding-top: 30px;
  /* border: 1px solid red; */
  width: 419px;
  height: 500px;
`;

const BoldText = styled.div`
  font-size: 18px;
  padding-bottom: 12px;
`;
const LightText = styled.div`
  font-family: "GmarketSansLight";
  font-size: 16px;
  padding-bottom: 30px;
`;

export default function ReadContiModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleReadContiModal = () => {
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
          <Overlay onClick={toggleReadContiModal} />
          <ContiModal>
            <ModalTop>
              <ContiTitle>예수로 살리</ContiTitle>
              <Icons>
                <img src={shareIcon} alt="유저 이미지 아이콘" />
                <img src={printIcon} alt="유저 이미지 아이콘" />
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
                <BoldText>곡 제목</BoldText>
                <LightText>예수로 살리</LightText>
                <BoldText>곡 코드</BoldText>
                <LightText>G Key</LightText>
                <BoldText>곡 버전</BoldText>
                <LightText>마커스</LightText>
                <BoldText>영상 링크</BoldText>
                <LightText>
                  https://github.com/LikeLionHGU/ChurchPlus-front-2024
                </LightText>
              </ContiInfo>
            </ModalContent>
          </ContiModal>
        </Modal>
      )}
      <button onClick={toggleReadContiModal}>콘티모달</button>
    </>
  );
}

// const ModalTop = styled.div`
//   display: flex;
//   font-size: 22px;
// `;

// const Title = styled.div`
//   text-align: center;
//   width: 25rem;
//   height: 2.5rem;
//   margin-left: 6rem;
//   margin-right: 3.9rem;
//   border-bottom: 1px solid #c1c1c1;
// `;

// const Icons = styled.div`
//   img {
//     padding-top: 0.8rem;
//     height: 1.7rem;
//   }

//   img:not(:last-child) {
//     padding-right: 1rem;
//   }
// `;

// const ModalBody = styled.div`
//   display: flex;
// `;

// const Photo = styled.div`
//   margin-right: 2rem;
//   width: 495px;
//   height: 35.5rem;

//   //이미지 영역 확인용
//   border: 1px solid #c5bed3;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//     background-position: top; /* 이미지의 상단부터 보이도록 설정 */
//   }
// `;

// const Link = styled.div`
//   display: flex;
//   width: 15rem;
//   padding-top: 1rem;
//   margin-bottom: 0.8rem;
//   justify-content: left;
//   cursor: pointer;
//   overflow: auto;

//   &::-webkit-scrollbar {
//     display: none;
//   }

//   div {
//     color: #281a47;
//   }
//   img {
//     padding-top: 0.2rem;
//     height: 1.2rem;
//   }
// `;

// const Text = styled.div`
//   background-color: #ffffff;
//   width: 13rem;
//   height: 26rem;
//   border-radius: 1.5rem;
//   text-align: center;
//   padding: 1rem;
//   padding-top: 2rem;
//   white-space: pre-line; /* 엔터를 <br> 태그로 변환하여 줄 바꿈 처리 */
//   overflow: auto;

//   &::-webkit-scrollbar {
//     display: none; /* 크롬, 사파리, 오페라, 엣지 */
//   }
// `;

// const CloseModal = styled.div`
//   cursor: pointer;
//   img {
//     height: 3rem;
//   }
// `;
