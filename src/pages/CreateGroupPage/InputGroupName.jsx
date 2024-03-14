import React, { useState } from "react";
import styled, { css } from "styled-components";
// import { useNavigate } from "react-router-dom";
import nextBtn from "../../assets/images/commonUI/NextButton.svg";
import nextBtnHover from "../../assets/images/commonUI/NextButtonHover.svg";
import askTeam from "../../assets/images/commonUI/AlreadyHaveTeam.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";

const Btn = styled.div`
  margin-top: 11%;
  text-align: center;

  img {
    height: 59px;
    cursor: pointer;
  }

  img:hover {
    content: url(${nextBtnHover});
  }
`;

const AskTeam = styled.img`
  height: 20px;
  float: right;
  margin-right: 10%;
  cursor: pointer;
`;

function InputGroupName() {
  const [teamName, setTeamName] = useState("");
  // const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (teamName.trim() !== "") {
      // navigate("/CreateName", { state: { teamName } });
    } else {
      alert("팀 이름을 입력하세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={0} />
      <Text>팀명을 입력해주세요.</Text>
      <TextBox>
        <input
          type="text"
          autoFocus
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </TextBox>
      <Btn>
        <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
      </Btn>
      <AskTeam src={askTeam} alt="이미 팀이 있으신가요?" />
    </BackgroundWrapper>
  );
}

export default InputGroupName;
