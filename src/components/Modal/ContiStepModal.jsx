import React, { useEffect, useState } from "react";
import styled from "styled-components";
import saveBtn from "../../assets/Icons/SaveBtn.svg";
import leftArrow from "../../assets/Icons/leftArrow.svg";
import rightArrow from "../../assets/Icons/rightArrow.svg";
import { BlueText } from "../CreateGroupPage/Text";
import { useRecoilState, useRecoilValue } from "recoil";
import { contiStepModalState, musicIdListState } from "../../atom";
import getContiMusicInfo from "../../apis/getContiMusicInfo";
import createConti from "../../apis/createConti";



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

const ContiTitle = styled.input`
  margin-left: 400px;
  font-size: 24px;
  font-family: "GmarketSansLight";
  text-align: center;  
  border: none;        
  border-bottom: 2px solid #000;  
  outline: none;       
  padding: 10px 0;     
  &::placeholder {
    text-align: center;  
  }
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
    padding-top: 10px;
    padding-left: 10px;
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
  const [isModalOpen, setIsModalOpen] = useRecoilState(contiStepModalState);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [steps, setSteps] = useState([]);
  const musicIdList = useRecoilValue(musicIdListState);
  const memberId = localStorage.getItem("memberId");
  const groupId = localStorage.getItem("groupId");
  const [listName, setListName] = useState("");
  const [placeholder, setPlaceholder] = useState("콘티명");
  const [description, setDescription] = useState("");
  const [musicSetList, setMusicSetList] = useState([]);

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = () => {
    if (document.getElementById('contiTitleInput').value === "") {
      setPlaceholder("콘티명");
    }
  };

  const handleChange = (e) => {
    setListName(e.target.value);
  };
  
  useEffect(() => {
    if (steps[currentStep]) {
      setDescription(steps[currentStep].description || "");
    }
  }, [currentStep, steps]);

  const handleDescriptionChange = (e) => {
    const newDescription = e.target.value;
    setDescription(newDescription);

    setSteps((prevSteps) => {
      const updatedSteps = [...prevSteps];
      updatedSteps[currentStep] = {
        ...updatedSteps[currentStep],
        description: newDescription,
      };
      return updatedSteps;
    });
  };

  useEffect(() => {
    const fetchMusicInfo = async () => {
      setIsLoading(true);
      try {
        const fetchedMusicInfo = await getContiMusicInfo(musicIdList, memberId, groupId);
        setSteps(fetchedMusicInfo);
      } catch (error) {
        console.error("Failed to fetch music info:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMusicInfo();
  }, [musicIdList, memberId, groupId]);

  useEffect(() => {
    const updatedMusicSetList = steps.map(step => ({
      musicId: step.musicId,
      description: step.description || ""
    }));
    setMusicSetList(updatedMusicSetList);
  }, [steps]);

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

  const handleSubmitBtnClick = async () => {
    const requestData = {
      memberId,
      groupId,
      setListName: listName,
      musicSetList
    };
  console.log("requestData:",requestData)

    try {
      await createConti(requestData);
    } catch (error) {
      console.error("그룹 참여 실패:", error);
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

  console.log("steps", steps);
  console.log("musicSetList", musicSetList);

  return (
    <>
      {isModalOpen && (
        <Modal>
          <Overlay onClick={toggleContiStepModal} />
          <ContiModal>
            <ModalTop>
              <ContiTitle 
                id="contiTitleInput"
                placeholder={placeholder}
                onFocus={handleFocus}
                onBlur={handleBlur}
                value={listName} 
                onChange={handleChange} 
              />
              <ContiNumInfo>
                현재 <BlueText>{steps.length}</BlueText>곡이 담겨있어요
              </ContiNumInfo>
            </ModalTop>
            <Flex>
              <Arrow src={leftArrow} left onClick={handlePrevStep} />
              <ModalContent>
                <ContiImage>
                  <img src={steps[currentStep].musicImageUrl} alt="Conti Image" />
                </ContiImage>
                <ContiInfo>
                  <BoldText>곡 제목</BoldText>
                  <LightText>{steps[currentStep].musicName}</LightText>
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
                  <textarea 
                    placeholder="메모를 자유롭게 입력하세요"
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <img
                    src={saveBtn}
                    alt="저장버튼"
                    onClick={handleSubmitBtnClick} 
                  />
                </ContiInfo>
              </ModalContent>
              <Arrow src={rightArrow} onClick={handleNextStep} />
            </Flex>
          </ContiModal>
        </Modal>
      )}
    </>
  );
}
