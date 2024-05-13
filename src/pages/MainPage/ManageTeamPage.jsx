import React from "react";
import ManageTeam from "../../components/MainPage/ManageTeam";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";
import bellIcon from "../../assets/Icons/bell.svg";
import settingIcon from "../../assets/Icons/setting.svg";
import userImgIcon from "../../assets/Icons/userImg.svg";
import { HeaderWrapper, Menu, PersonInfo, Icons  } from "../../components/CommonUI/Header";
import { BlueText } from "../../components/CreateGroupPage/Text";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100vw - 203px);
  height: calc(100vh + 177px);
`;

function ManageTeamPage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <HeaderWrapper>
          <Menu>팀 관리</Menu>
          <Icons>
            <img src={bellIcon} alt="벨아이콘"></img>
            <img src={settingIcon} alt="환경설정 아이콘"></img>
            <img src={userImgIcon} alt="유저 이미지 아이콘"></img>
          </Icons>
          <PersonInfo>
            김교회 | <BlueText>인도자</BlueText>
          </PersonInfo>
        </HeaderWrapper>
        <ManageTeam />
      </ContentWrapper>
    </Wrapper>
  );
}

export default ManageTeamPage;
