import React, { useState } from "react";
import { BlueText, TextBoxVer2 } from "../../components/CreateGroupPage/Text";
import nextBtn from "../../assets/Icons/GroupNextBtn.svg";
import groomLogo from "../../assets/logo/GroomLogo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Logo = styled.img`
  height: 48px;
  width: 123px;
  margin-left: 40px;
  margin-top: 36px;
`;

const TextContainer = styled.div`
  margin-left: 135px;
`;

const Title = styled.div`
  font-size: 44px;
  margin-top: 54px;
`;

const Text = styled.div`
  font-size: 30px;
  margin-top: 85px;
`;

const NextBtn = styled.img`
  height: 52px;
  width: 114px;
  float: right;
  margin-right: 5%;
  cursor: pointer;
`;

function JoinExistGroupPage() {
  const [groupName, setGroupName] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // handleNextBtnClick();
    }
  };

  const handleNextBtnClick = () => {
    navigate("/InputPosition");
  };

  return (
    <div>
      <Logo src={groomLogo} alt="로고"></Logo>
      <TextContainer>
        <Title>
          <BlueText>기존 그룹 참여하기</BlueText>
        </Title>
        <Text>초대 코드를 입력해주세요</Text>
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
      <NextBtn
        src={nextBtn}
        alt="다음 버튼"
        onClick={handleNextBtnClick}
      ></NextBtn>
    </div>
  );
}

export default JoinExistGroupPage;
