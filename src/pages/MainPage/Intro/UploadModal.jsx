import { useEffect } from "react";
import styled from "styled-components";
import {  uploadModalState } from "../../../atom";
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

`;

const ModalContent = styled.div`
  position: absolute;
  top: 33%;
  left: 70%;
  transform: translate(-50%, -50%);
  height: 122px;
  width: 235px;
  background-color: #AEC3DE;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  /* font-family: "GmarketSansLight"; */
  font-size: 16px;
  &::after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    border-width: 30px;
    border-style: solid;
    border-color: transparent transparent #aec3de transparent;
    transform: translateX(-50%) scaleX(0.4);;
  }
`;
const FirstText = styled.div`
  margin-top:16px;
`

const NextButton = styled.div`
    width: 48px;
    height: 26px;
    border-radius: 10px;
    background-color: #8197bf;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 12px;
    cursor: pointer;
`

export default function UploadModal(){

  const [UploadModal,setUploadModal] = useRecoilState(uploadModalState);

  const closeUploadModal = () => {
    setUploadModal(false);
  }

  useEffect(() => {
    if (UploadModal) { 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [UploadModal]); 


  return ( 
    <>

    {UploadModal && (
        <Modal>
            <Overlay onClick={closeUploadModal}/>
            <ModalContent>
            <FirstText>새로운 악보를 추가해보세요 !</FirstText>
            <div>당신만의 악보 보관함을 생성</div>
            <div>할 수 있습니다 !</div>
            <NextButton onClick={closeUploadModal}>다음</NextButton>
            </ModalContent>
            </Modal>
    )}
    </>
  );
}