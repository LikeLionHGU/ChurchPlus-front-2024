import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nextBtnSVG from "../../assets/images/commonUI/NextButtonSVG.svg";
import prevBtnSVG from "../../assets/images/commonUI/PrevButtonSVG.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { BlueText, Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { NextBtn, PrevBtn } from "../../components/CreateGroupPage/Button";

function InputUserName() {
  const [userName, setUserName] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "") {
      navigate("/InputPosition", {
        state: { userName, groupName: location.state.groupName },
      });
    } else {
      alert("이름을 입력하세요.");
    }
  };

  const handlePrevBtnClick = () => {
    navigate("/InputGroupName");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={1} />
      <Text>
        <BlueText>이름</BlueText>을 입력해주세요.
      </Text>
      <TextBox>
        <input
          type="text"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </TextBox>

      <PrevBtn>
        <img onClick={handlePrevBtnClick} src={prevBtnSVG} alt="이전 버튼" />
      </PrevBtn>

      <NextBtn>
        <img onClick={handleNextBtnClick} src={nextBtnSVG} alt="다음 버튼" />
      </NextBtn>
    </BackgroundWrapper>
  );
}

export default InputUserName;
