import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextBtnSVG from "../../assets/images/commonUI/NextButtonSVG.svg";
import prevBtnSVG from "../../assets/images/commonUI/PrevButtonSVG.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { NextBtn, PrevBtn } from "../../components/CreateGroupPage/Button";

function InputGroupCode() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "") {
      navigate("/InputUserName", {
        state: { userName },
      });
    } else {
      alert("초대 코드를 입력하세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  const handlePrevBtnClick = () => {
    navigate("/InputGroupName");
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={0} />
      <Text>초대코드를 입력해주세요.</Text>
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
        <img onClick={handleNextBtnClick} src={nextBtnSVG} alt="Next Button" />
      </NextBtn>
    </BackgroundWrapper>
  );
}

export default InputGroupCode;
