import React, { useEffect } from "react";
import styled from "styled-components";
import LittleBitFamiliar from "../../../asset/Images/Icons/LittleBitFamiliar.svg";
import Famiiliary from "../../../asset/Images/Icons/Familiary.svg";
import NotUsedToIt from "../../../asset/Images/Icons/NotUsedToIt.svg";
import ExitButton from "../../../asset/Images/Buttons/ExitButton.svg";
import { useSetRecoilState } from "recoil";
import { introModalState, searchBarModalState } from "../../../atom";
import { useRecoilState } from "recoil";


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
`;

const ModalOpen = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  text-align: left;
  cursor: pointer;
  border: none;
  background-color: white;

  &:hover {
    background-color: #dfdfdf;
  }

  img {
    padding: 10px;
  }
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 590px;
  width: 1050px;
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: grid;
  width: 1000px;
  grid-template-columns: 1fr 11fr 1fr;
`;

const WelcomeTOGroom = styled.div`
  font-size: 35px;
  margin-top: 75px;
  display: flex;
  justify-content: center;
`;

const Exit = styled.img`
  margin-right: auto;
  margin-top: 46px;
  cursor: pointer;
`;

const HaveYouTriedItBefore = styled.div`
  font-size: 17px;
  margin-top: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 25px;
  width: 900px;
  justify-content: space-between;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 280px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;

const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  height: 40px;
  background-color: #0d2040;
  margin-top: auto;
  color: white;
`;

const ConfirmButton = styled.div`
  width: 95px;
  height: 35px;
  border-radius: 14px;
  color: white;
  background-color: #3e5692;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin-top: 47px;
  cursor: pointer;
  padding-top: 5px;
`;

export default function IntroModal() {
  const setSearchBarModal = useSetRecoilState(searchBarModalState);
  const [introModal, setIntroModal] = useRecoilState(introModalState);

  const toggleIntroModal = () => {
    setIntroModal((prevState) => !prevState);
  };

  useEffect(() => {
    if (introModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [introModal]);

  const openSearchBarModal = () => {
    toggleIntroModal();
    setSearchBarModal(true);
  }

  return (
    <>
      <ModalOpen onClick={toggleIntroModal}>
        <div>Intro Modal</div>
      </ModalOpen>
      {introModal && (
        <Modal>
          <Overlay onClick={toggleIntroModal} />
          <ModalContent>
            <HeaderContainer>
              <div />
              <WelcomeTOGroom>Groom에 오신 것을 환영합니다 !</WelcomeTOGroom>
              <Exit src={ExitButton} alt="" onClick={toggleIntroModal} />
            </HeaderContainer>
            <HaveYouTriedItBefore>
              서비스를 이용해본 경험이 있으신가요?
            </HaveYouTriedItBefore>
            <CardContainer>
            <Card onClick={openSearchBarModal}>
                <img src={NotUsedToIt} alt="" />
                <CardText>약간 익숙함</CardText>
              </Card>
              <Card>
                <img src={LittleBitFamiliar} alt="" />
                <CardText>약간 익숙함</CardText>
              </Card>
              <Card>
                <img src={Famiiliary} alt="" />
                <CardText>아주 익숙함</CardText>
              </Card>
            </CardContainer>
            <ConfirmButton onClick={toggleIntroModal}>확인</ConfirmButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
