import React, { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import nextBtn from "../../assets/images/commonUI/NextButton.svg";
import nextBtnHover from "../../assets/images/commonUI/NextButtonHover.svg";
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

function InputUserName() {
  const [userName, setUserName] = useState("");
  // const location = useLocation();

  // const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "") {
      // navigate("/CreatePosition", {
      //   state: { userName, teamName: location.state.teamName },
      // });
    } else {
      alert("유저 이름을 입력하세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={1} />
      <Text>이름을 입력해주세요.</Text>
      <TextBox>
        <input
          type="text"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </TextBox>
      <Btn>
        <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
      </Btn>
    </BackgroundWrapper>
  );
}

export default InputUserName;
