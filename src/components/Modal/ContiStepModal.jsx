import React, { useEffect, useState } from "react";
import styled from "styled-components";
import saveBtn from "../../assets/Icons/SaveBtn.svg";
import leftArrow from "../../assets/Icons/leftArrow.svg";
import rightArrow from "../../assets/Icons/rightArrow.svg";
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

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalTop = styled.div`
  display: flex;
  margin-top: 35px;
  margin-bottom: 35px;
  height: 40px;
`;

const ContiTitle = styled.div`
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
  position: relative;
`;

const ContiImage = styled.div`
  margin-left: 120px;
  margin-right: 90px;
  width: 350px;
  height: 470px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-position: top;
  }
`;

const ContiInfo = styled.div`
  padding-top: 10px;
  width: 419px;
  height: 500px;

  img {
    cursor: pointer;
    margin-left: 340px;
    width: 79px;
    height: 51px;
  }

  textarea {
    font-family: "GmarketSansLight";
    font-size: 16px;
    height: 90px;
    width: 280px;
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

const Arrow = styled.img`
  /* border: 1px solid green; */
  padding: 50px;
  cursor: pointer;
  width: 30px;
  height: 25px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left: 20px;" : "right: 20px;")}
`;

export default function ContiStepModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "예수로 살리",
      code: "G Key",
      version: "마커스",
      link: "https://github.com/LikeLionHGU/ChurchPlus-front-2024",
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfNjgg/MDAxNjA3ODA5NjA0NTM2.YM6pUqS1a5iOpS6E6qgmXv-OY2NpxuLqzKKw7zDv8-Yg.YdBycMqSyFsaoOD1SSXqqfYiRucys1Ysb7gN3f7_Eqsg.JPEG.zzseulzz/%EC%98%88%EC%88%98%EB%A1%9C_%EC%82%B4%EB%A6%AC.jpg?type=w800",
    },
    {
      title: "주를 위한 이곳에",
      code: "C Key",
      version: "어노인팅",
      link: "링크 2",
      imageUrl:
        "https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F2133A53A53E821BC03",
    },
    {
      title: "빛나는 왕의 왕",
      code: "A Key",
      version: "위러브",
      link: "링크 3",
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMDZfMTAg/MDAxNTcwMzM5ODI4MjMx.ZAX16rp89kxvAB6ihoXtCd1ilsstNlPcSONW7TPWj1Qg.N_DHEWNVAPdgz3Oeyr9sXXX5gUFZ_YWPM_AolsYKhuYg.PNG.joseph1040/%EB%B9%9B%EB%82%98%EB%8A%94%EC%99%95%EC%9D%98%EC%99%95.png?type=w800",
    },
  ];

  const toggleContiStepModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
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
              <ContiTitle>{steps[currentStep].title}</ContiTitle>
              <ContiNumInfo>
                현재 <BlueText>{steps.length}</BlueText>곡이 담겨있어요
              </ContiNumInfo>
            </ModalTop>
            <Flex>
              <Arrow src={leftArrow} left onClick={handlePrevStep} />
              <ModalContent>
                <ContiImage>
                  <img src={steps[currentStep].imageUrl} alt="Conti Image" />
                </ContiImage>
                <ContiInfo>
                  <BoldText>곡 제목</BoldText>
                  <LightText>{steps[currentStep].title}</LightText>
                  <BoldText>곡 코드</BoldText>
                  <LightText>{steps[currentStep].code}</LightText>
                  <BoldText>곡 버전</BoldText>
                  <LightText>{steps[currentStep].version}</LightText>
                  <BoldText>영상 링크</BoldText>
                  <LightText>
                    <Link href={steps[currentStep].link} target="_blank">
                      {steps[currentStep].link}
                    </Link>
                  </LightText>
                  <BoldText>메모</BoldText>
                  <textarea placeholder="메모를 자유롭게 입력하세요"></textarea>
                  <img
                    src={saveBtn}
                    alt="저장버튼"
                    onClick={toggleContiStepModal}
                  />
                </ContiInfo>
              </ModalContent>
              <Arrow src={rightArrow} onClick={handleNextStep} />
            </Flex>
          </ContiModal>
        </Modal>
      )}
      <button onClick={toggleContiStepModal}>콘티스탭모달</button>
    </>
  );
}
