import React, { useState , useEffect} from "react";
import styled from "styled-components";
import bellIcon from "../../assets/Icons/bell.svg";
import settingIcon from "../../assets/Icons/setting.svg";
import { BlueText } from "../CreateGroupPage/Text";
import ReadContiModal from "../Modal/ReadContiModal";
import ContiStepModal from "../Modal/ContiStepModal";
import ModifyContiModal from "../Modal/ModifyContiModal";
import getPositionAndUserName from "../../apis/getPositionAndUserName";
// import TeamManagementModal from "./TeamManagementModal";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
`;

const Menu = styled.div`
  font-family: "GmarketSansMedium";
  font-size: 30px;
  color: #325692;
  border: none;
  height: 42px;
  width: 200px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  padding-top: 55px;
  padding-left: 37px;
  /* margin-right: 733px; */
`;

const PersonInfo = styled.div`
  font-family: "GmarketSansLight";
  font-size: 20px;
  padding-top: 47px;
  margin-right: 60px;
`;

const Icons = styled.div`
  margin-left: auto;
  float: right;
  padding-top: 44px;

  img {
    cursor: pointer;
    height: 24px;
    margin-right: 12px;
    padding-top: 2px;
    vertical-align: middle;
  }
`;

function Header({ menu }) {
  const memberId = localStorage.getItem("memberId");
  const groupId = localStorage.getItem("groupId");
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const fetchedUserInfo = await getPositionAndUserName(memberId, groupId);
      setUserInfo(fetchedUserInfo);
    };
    fetchUserInfo();
  }, [memberId], [groupId]);
    console.log("nickname: ", userInfo)
  return (
    <Wrapper>
      <Menu>{menu}</Menu>
      <Icons>
        <img src={settingIcon} alt="환경설정 아이콘"></img>
        <img src={bellIcon} alt="벨아이콘"></img>
      </Icons>
      <PersonInfo>
      {userInfo.nickname} | <BlueText> {userInfo.position} </BlueText>
      {/* {userInfo.nickname} | <BlueText> {userInfo.position} </BlueText> */}
      </PersonInfo>
    </Wrapper>
  );
}

export default Header;
