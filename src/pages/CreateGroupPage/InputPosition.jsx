import React, { useState } from "react";
import styled from "styled-components";
import startBtnSVG from "../../assets/images/commonUI/StartButtonSVG.svg";
import prevBtnSVG from "../../assets/images/commonUI/PrevButtonSVG.svg";
import img1 from "../../assets/images/groupPositionImg/1_Leader.svg";
import img2 from "../../assets/images/groupPositionImg/2_MainCindy.svg";
import img3 from "../../assets/images/groupPositionImg/3_SecondCindy.svg";
import img4 from "../../assets/images/groupPositionImg/4_Drum.svg";
import img5 from "../../assets/images/groupPositionImg/5_Aucoustic Guitar.svg";
import img6 from "../../assets/images/groupPositionImg/6_Electric Guitar.svg";
import img7 from "../../assets/images/groupPositionImg/7_Base Guitar.svg";
import img8 from "../../assets/images/groupPositionImg/8_Singer.svg";
import img9 from "../../assets/images/groupPositionImg/9_Enginner.svg";
import img10 from "../../assets/images/groupPositionImg/10_Pastor.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { PrevBtn, StartBtn } from "../../components/CreateGroupPage/Button";
import { BlueText } from "../../components/CreateGroupPage/Text";
// import createGroup from "../../apis/createGroup";

const positionImages = [
  {
    image: img1,
    description: "리더",
  },
  {
    image: img2,
    description: "메인 신디",
  },
  {
    image: img3,
    description: "세컨 신디",
  },
  {
    image: img4,
    description: "드럼",
  },
  {
    image: img5,
    description: "어쿠스틱 기타",
  },
  {
    image: img6,
    description: "일렉 기타",
  },
  {
    image: img7,
    description: "베이스 기타",
  },
  {
    image: img8,
    description: "싱어",
  },
  {
    image: img9,
    description: "엔지니어",
  },
  {
    image: img10,
    description: "목사님",
  },
];

const Text = styled.div`
  font-size: 40px;
  padding-left: 8.5%;
  padding-top: 4%;
  color: black;
`;

const PositionContainer = styled.div`
  margin: 2rem auto 0rem auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 85%;
`;

const PositionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const ImageContainer = styled.div`
  height: 130px;
  width: 130px;
  border: 5px solid
    ${({ $isSelected }) => ($isSelected ? "#325692" : "transparent")};
  border-radius: 30px;
`;

const PositionImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    filter: grayscale(0.9);
  }
`;

const Input = styled.div`
  padding-top: 20px;
  font-family: "GmarketSansLight";
  font-size: 30px;
  text-align: center;
  color: black;
`;

function InputPosition() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [selectedPositionIndex, setSelectedPositionIndex] = useState(null);

  const handlePositionSelect = (index) => {
    setSelectedPositionIndex(index);
    alert(`${positionImages[index].description} 포지션을 선택하셨습니다.`);
  };

  // state를 통해 페이지별로 사용자의 입력값이 잘 전달되고 있음
  // const groupName = location.state.groupName;
  // const userName = location.state.userName;
  // console.log(groupName);
  // console.log(userName);
  // console.log(position);

  const handleCompleteBtnClick = async () => {
    if (!selectedPositionIndex === null) {
      alert("포지션을 선택해주세요.");
      return;
    }
    // const groupName = location.state.groupName;
    // const userName = location.state.userName;

    // const memberId = localStorage.getItem("memberId");

    try {
      // await createGroup(groupName, memberId, position, nickname);
      // // alert(`그룹이 정상적으로 추가되었습니다.`);
      // navigate("/SelectTeam");
    } catch (error) {
      console.error("그룹 추가 실패:", error);
    }
  };

  const handlePrevBtnClick = () => {
    navigate("/InputUserName");
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={2} />
      <Text>
        <BlueText>포지션</BlueText>을 선택해주세요.
      </Text>

      <PositionContainer>
        {positionImages.map((position, index) => (
          <PositionItem key={index} onClick={() => handlePositionSelect(index)}>
            <ImageContainer $isSelected={selectedPositionIndex === index}>
              <PositionImage src={position.image} alt={position.description} />
            </ImageContainer>
            <Input>{position.description}</Input>
          </PositionItem>
        ))}
      </PositionContainer>

      {/* <BackBtn marginTop="0.5rem">*/}
      <PrevBtn $marginTop="0rem">
        <img onClick={handlePrevBtnClick} src={prevBtnSVG} alt="이전 버튼" />
      </PrevBtn>
      <StartBtn $marginTop="0rem">
        <img
          onClick={handleCompleteBtnClick}
          src={startBtnSVG}
          alt="완료 버튼"
        />
      </StartBtn>
    </BackgroundWrapper>
  );
}

export default InputPosition;
