import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import nextBtn from "../../assets/images/commonUI/NextButton.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { Btn } from "../../components/CreateGroupPage/Button";

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
