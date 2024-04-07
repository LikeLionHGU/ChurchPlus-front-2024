import React, { useState } from "react";
import styled from "styled-components";
import bellIcon from "../../assets/Icons/bell.svg";
import userIcon from "../../assets/Icons/userIcon.svg";
import TeamManagementModal from "./TeamManagementModal";

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  box-shadow: 0 7px 7px -7px #d2d2d2;
`;

const Menu = styled.button`
  font-family: "GmarketSansMedium";
  font-size: 18px;
  color: #0d2040;
  border: none;
  height: 60px;
  width: 193px;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  margin-top: 12px;
  margin-left: 12px;

  &:hover {
    background-color: rgba(204, 223, 255, 0.2);
  }
`;

const Icons = styled.div`
  float: right;
  margin-right: 34px;
  margin-top: 20px;

  img {
    cursor: pointer;
    margin-right: 28px;
    vertical-align: middle;
  }
`;

function Header() {
  const [isTeamManagementModalOpen, setTeamManagementModalOpen] =
    useState(false);

  const toggleTeamManagementModal = () => {
    setTeamManagementModalOpen((prevState) => !prevState);
    document.body.style.overflow = isTeamManagementModalOpen
      ? "auto"
      : "hidden";
  };

  return (
    <Wrapper>
      <Menu>일정표 관리</Menu>
      <Menu onClick={toggleTeamManagementModal}>팀 관리</Menu>
      <Menu>악보 보관함</Menu>
      <Menu>콘티 보관함</Menu>
      <Icons>
        <img src={bellIcon} alt="벨아이콘"></img>
        <img src={userIcon} alt="벨아이콘"></img>
      </Icons>
      <TeamManagementModal
        isOpen={isTeamManagementModalOpen}
        onClose={toggleTeamManagementModal}
      />
    </Wrapper>
  );
}

export default Header;
