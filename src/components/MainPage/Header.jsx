import React, { useState } from "react";
import styled from "styled-components";
import bellIcon from "../../assets/Icons/bell.svg";
import settingIcon from "../../assets/Icons/setting.svg";
import userImgIcon from "../../assets/Icons/userImg.svg";
import { BlueText } from "../CreateGroupPage/Text";
// import TeamManagementModal from "./TeamManagementModal";

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  border: 1px solid red;
  display: flex;
`;

const Menu = styled.div`
  font-family: "GmarketSansMedium";
  font-size: 30px;
  color: #325692;
  border: none;
  height: 42px;
  width: 153px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  padding-top: 55px;
  padding-left: 37px;
  /* margin-right: 733px; */
`;

const PersonInfo = styled.div`
  font-family: "GmarketSansMedium";
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
    margin-right: 20px;
    vertical-align: middle;
  }
`;

function Header() {
  // const [isTeamManagementModalOpen, setTeamManagementModalOpen] =
  //   useState(false);

  // const toggleTeamManagementModal = () => {
  //   setTeamManagementModalOpen((prevState) => !prevState);
  //   document.body.style.overflow = isTeamManagementModalOpen
  //     ? "auto"
  //     : "hidden";
  // };

  return (
    <Wrapper>
      <Menu>악보 보관함</Menu>
      <Icons>
        <img src={bellIcon} alt="벨아이콘"></img>
        <img src={settingIcon} alt="환경설정 아이콘"></img>
        <img src={userImgIcon} alt="유저 이미지 아이콘"></img>
      </Icons>
      <PersonInfo>
        김교회 | <BlueText>인도자</BlueText>
      </PersonInfo>
    </Wrapper>
  );
}

export default Header;
