import { useEffect } from "react";
import styled from "styled-components";
import { KeyModalState, searchBarModalState } from "../../../atom";
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
  top: 33%;
  left: 26%;
  transform: translate(-50%, -50%);
  height: 122px;
  width: 248px;
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

export default function SearchBarModal(){

  const [searchBarModal,setSearchBarModal] = useRecoilState(searchBarModalState);
  const setKeyModal = useSetRecoilState(KeyModalState);

  const closeSearchBarModal = () => {
    setSearchBarModal(false); 
  };
  
  const openKeyModal = () => {
    closeSearchBarModal();
    setKeyModal(true);
  }

  useEffect(() => {
    if (searchBarModal) { 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [searchBarModal]); 

  return ( 
    <>

    {searchBarModal && (
        <Modal>
            <Overlay onClick={closeSearchBarModal}/>
            <ModalContent>
            <FirstText>검색 기능을 통해 모든 악보를</FirstText>
            <div>한 눈에 볼 수 있습니다 ! 손 쉽게</div>
            <div>찾고 싶은 악보를 찾아보세요 !</div>
            <NextButton onClick={openKeyModal}>다음</NextButton>
            </ModalContent>
            </Modal>
    )}
    </>
  );
}