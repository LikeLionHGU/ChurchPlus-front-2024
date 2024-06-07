import React, { useState } from "react";
import { BlueText, TextBoxVer2 } from "../../components/CreateGroupPage/Text";
import { NextBtn } from "../../components/CreateGroupPage/Button";
import groomLogo from "../../assets/logo/GroomLogo.svg";
import rightArrow from "../../assets/Icons/navArrowRight.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  height: 100vh;
`;

const Logo = styled.img`
  height: 48px;
  width: 123px;
  margin-left: 45px;
  margin-top: 45px;
`;

const TextContainer = styled.div`
  margin-left: 379px;
  margin-right: 379px;
  /* margin-top: 70px; */
`;

const Title = styled.div`
  font-size: 42px;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;

const Text = styled.div`
  font-family: "GmarketSansLight";
  font-size: 28px;
  margin-top: 65px;
  margin-bottom: 4px;
  color: #0d2040;
`;

const BtnText = styled.div`
  display: flex;
`;

const Next = styled.div`
  margin-left: 15px;
`;

const ArrowImg = styled.img`
  margin-left: 30px;
  height: 30px;
  width: 30px;
  padding-bottom: 3px;
`;

function CreateNewGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // handleNextBtnClick();
    }
  };

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "" && groupName.trim() !== "") {
      navigate("/InputPosition", {
        state: { userName, groupName },
      });
    } else {
      alert("빈칸을 채워주세요.");
    }
  };
  console.log(groupName);
  console.log(userName);
  return (
    <Wrapper>
      <Logo src={groomLogo} alt="로고"></Logo>
      <TextContainer>
        <Title>
          <BlueText>새로운 그룹 생성하기</BlueText>
        </Title>
        <Text>팀명을 입력해주세요</Text>
        <TextBoxVer2>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </TextBoxVer2>
        <Text>이름을 입력해주세요</Text>
        <TextBoxVer2>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </TextBoxVer2>
      </TextContainer>
      <NextBtn onClick={handleNextBtnClick}>
        <BtnText>
          <Next>다음</Next>
          <ArrowImg src={rightArrow} alt="화살표"></ArrowImg>
        </BtnText>
      </NextBtn>
    </Wrapper>
  );
}

export default CreateNewGroupPage;
