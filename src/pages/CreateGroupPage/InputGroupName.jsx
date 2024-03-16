import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import nextBtn from "../../assets/images/commonUI/NextButton.svg";
import askGroup from "../../assets/images/commonUI/AlreadyHaveTeam.svg";
import { BackgroundWrapper } from "../../components/CreateGroupPage/Background";
import { AskGroup, Text, TextBox } from "../../components/CreateGroupPage/Text";
import { TopCompleteBars } from "../../components/CreateGroupPage/TopCompleteBar";
import { Btn } from "../../components/CreateGroupPage/Button";

function InputGroupName() {
  const [groupName, setGroupName] = useState("");
  const navigate = useNavigate();

  const handleNextBtnClick = async () => {
    if (groupName.trim() !== "") {
      navigate("/InputUserName", { state: { groupName } });
    } else {
      alert("팀 이름을 입력하세요.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleNextBtnClick();
    }
  };

  const handleAskGroupClick = () => {
    navigate("/InputGroupCode");
  };

  return (
    <div>
      <BackgroundWrapper>
        <TopCompleteBars currentPage={0} />
        <Text>팀명을 입력해주세요.</Text>
        <TextBox>
          <input
            type="text"
            autoFocus
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </TextBox>
        <Btn>
          <img onClick={handleNextBtnClick} src={nextBtn} alt="다음 버튼" />
        </Btn>
        <AskGroup
          onClick={handleAskGroupClick}
          src={askGroup}
          alt="이미 팀이 있으신가요?"
        />
      </BackgroundWrapper>
    </div>
  );
}

export default InputGroupName;
