import { useEffect } from "react";
import styled from "styled-components";
import { KeyModalState, uploadModalState } from "../../../atom";
import { useSetRecoilState } from "recoil";
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
  top: 7%;
  left: 53%;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 247px;
  background-color: #aec3de;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 16px;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 30px;
    border-style: solid;
    border-color: #aec3de transparent transparent transparent;
    transform: translateX(-50%) scaleX(0.4);
  }
`;

const TopText = styled.div`
  margin-top: 16px;
`;

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
`;

export default function KeyModal() {
  const [KeyModal, setKeyModal] = useRecoilState(KeyModalState);
  const setUploadModal = useSetRecoilState(uploadModalState);

  const closeKeyModal = () => {
    setKeyModal(false);
  };

  const openUploadModal = () => {
    setKeyModal(false);
    setUploadModal(true);
  };

  useEffect(() => {
    if (KeyModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [KeyModal]);

  return (
    <>
      {KeyModal && (
        <Modal>
          <Overlay onClick={closeKeyModal} />
          <ModalContent>
            <TopText>원하는 Key를 입력해서 악보를</TopText>
            <div>쉽게 찾아보세요 !</div>
            <NextButton onClick={openUploadModal}>다음</NextButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
