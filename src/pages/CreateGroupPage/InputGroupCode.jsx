import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextBtn from "../../assets/images/commonUI/NextButton.svg";
import backBtn from "../../assets/images/commonUI/BackButton.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { BackBtn, Btn } from "../../components/CreateGroupPage/Button";

function InputGroupCode() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (userName.trim() !== "") {
      navigate("/InputUserName", {
        state: { userName },
      });
    } else {
      alert("그룹 코드를 입력하세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  const handleBackBtnClick = () => {
    navigate("/InputGroupName");
  };

  return (
    <BackgroundWrapper>
      <TopCompleteBars currentPage={0} />
      <Text>코드를 입력해주세요.</Text>
      <TextBox>
        <input
          type="text"
          autoFocus
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </TextBox>
      <BackBtn>
        <img onClick={handleBackBtnClick} src={backBtn} alt="이전 버튼" />
      </BackBtn>
      <Btn>
        <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
      </Btn>
    </BackgroundWrapper>
  );
}

export default InputGroupCode;
