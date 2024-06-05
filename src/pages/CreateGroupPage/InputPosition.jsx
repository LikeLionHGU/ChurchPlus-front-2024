import React, { useState } from "react";
import styled from "styled-components";
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
import { BlueText } from "../../components/CreateGroupPage/Text";
import groomLogo from "../../assets/logo/GroomLogo.svg";
import startBtn from "../../assets/Icons/StartBtn.svg";
import createGroup from "../../apis/createGroup";
import joinGroup from "../../apis/JoinGroup";


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

const Logo = styled.img`
  height: 48px;
  width: 123px;
  margin-left: 40px;
  margin-top: 36px;
`;

const Text = styled.div`
  font-size: 40px;
  padding-left: 8.5%;
  margin-top: 50px;
  color: black;
  /* border: 1px solid red; */
`;

const PositionContainer = styled.div`
  margin: 76px auto 0px auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 85%;
  /* border: 1px solid red; */
`;

const PositionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 54px;
`;

const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
  border: 7px solid
    ${({ $isSelected }) => ($isSelected ? "#ccdfff" : "transparent")};
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

const StartBtn = styled.div`
  display: flex;
  justify-content: center;
  img {
    cursor: pointer;
    width: 148px;
    height: 50px;
  }
`;

function InputPosition() {
  const navigate = useNavigate();
  // const location = useLocation();
  const [position, setposition] = useState(null);
  const location = useLocation();
  const memberId = localStorage.getItem("memberId");


  const handlePositionSelect = (index) => {
    setposition(positionImages[index].description);
    alert(`${positionImages[index].description} 포지션을 선택하셨습니다.`);
  };

  // state를 통해 페이지별로 사용자의 입력값이 잘 전달되고 있음
  const groupName = location.state.groupName;
  const nickname = location.state.userName;
  const invitationCode = location.state.invitationCode
  console.log("groupName is",groupName);
  console.log("nickname is",nickname);
  console.log("memberId is",memberId);
  console.log("position is",position);
  console.log("invitationCode is", invitationCode)
  

  const handleCompleteBtnClick = async () => {
    if (!position === null) {
      alert("포지션을 선택해주세요.");
      return;
    }

    try{
      await joinGroup(invitationCode, memberId, position, nickname);
      navigate("/SelectTeamPage");
    } catch (error) {
      console.error("그룹 참여 실패:", error);
    }
    

    try {
      await createGroup(groupName, memberId, position, nickname);
      // alert(`그룹이 정상적으로 추가되었습니다.`);
      navigate("/SelectTeamPage");
    } catch (error) {
      console.error("그룹 추가 실패:", error);
    }
  };

  return (
    <BackgroundWrapper>
      <Logo src={groomLogo} alt="그룸 로고" />
      <Text>
        <BlueText>포지션</BlueText>을 선택해주세요.
      </Text>

      <PositionContainer>
        {positionImages.map((position, index) => (
          <PositionItem key={index} onClick={() => handlePositionSelect(index)}>
            <ImageContainer $isSelected={position === index}>
              <PositionImage src={position.image} alt={position.description} />
            </ImageContainer>
            <Input>{position.description}</Input>
          </PositionItem>
        ))}
      </PositionContainer>
      <StartBtn>
        <img onClick={handleCompleteBtnClick} src={startBtn} alt="완료 버튼" />
      </StartBtn>
    </BackgroundWrapper>
  );
}

export default InputPosition;
