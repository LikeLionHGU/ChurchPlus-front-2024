import React, { useEffect } from "react";
import styled from "styled-components";
import Famiiliary from "../../../asset/Images/Icons/Familiary.svg";
import NotUsedToIt from "../../../asset/Images/Icons/NotUsedToIt.svg";
import ExitButton from "../../../asset/Images/Buttons/ExitButton.svg";
import { useSetRecoilState } from "recoil";
import { introModalState, newMemberState, searchBarModalState } from "../../../atom";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

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
  height: 630px;
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

const GroomText = styled.div`
  color: #0d2040;
`;

const WelcomeTOGroom = styled.div`
  font-family: "GmarketSansLight";
  font-size: 38px;
  margin-top: 62px;
  display: flex;
  justify-content: center;
  color: #514642;
`;

const Exit = styled.img`
  margin-right: auto;
  margin-top: 46px;
  cursor: pointer;
`;

const HaveYouTriedItBefore = styled.div`
  font-size: 20px;
  margin-top: 30px;
  font-family: "GmarketSansLight";
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 50px;
  width: 591px;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 244px;
  height: 300px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  cursor: pointer;
`;

const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 10px 10px;
  height: 47px;
  background-color: #0d2040;
  margin-top: auto;
  color: #ededed;
  font-size: 20px;
`;

const ConfirmButton = styled.div`
  /* border: 1px solid red; */
  width: 103px;
  height: 45px;
  border-radius: 14px;
  color: white;
  background-color: #3e5692;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  margin-top: 50px;
  cursor: pointer;
`;

export default function IntroModal() {
  const setSearchBarModal = useSetRecoilState(searchBarModalState);
  const [introModal, setIntroModal] = useRecoilState(newMemberState);
  console.log("introModal:", introModal)
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
  };

  return (
    <>
      <ModalOpen onClick={toggleIntroModal}>
      </ModalOpen>
      {introModal && (
        <Modal>
          <Overlay onClick={toggleIntroModal} />
          <ModalContent>
            <HeaderContainer>
              <div />
              <WelcomeTOGroom>
                <GroomText>groom</GroomText>에 오신 것을 환영합니다 !
              </WelcomeTOGroom>
              <Exit src={ExitButton} alt="" onClick={toggleIntroModal} />
            </HeaderContainer>
            <HaveYouTriedItBefore>
              서비스를 이용해본 경험이 있으신가요?
            </HaveYouTriedItBefore>
            <CardContainer>
              <Card onClick={openSearchBarModal}>
                <img src={NotUsedToIt} alt="" />
                <CardText>익숙하지 않음</CardText>
              </Card>
              {/* <Card>
                <img src={LittleBitFamiliar} alt="" />
                <CardText>약간 익숙함</CardText>
              </Card> */}
              <Card onClick={toggleIntroModal}>
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
