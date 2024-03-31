import React from "react";
import styled from "styled-components";
import homePage from "../../asset/Images/Background/HomePage.svg";
import homePageLogo from "../../asset/Images/Logos/HomePageLogo.svg";
import ChoseGroupImg from "../../asset/Images/Icons/ChoseGroupImg.svg";
import CreateGroup from "../../asset/Images/Icons/CreateGroup.svg";
import ManageProFileImg from "../../asset/Images/Buttons/ManageProFile.svg";
import { Link } from "react-router-dom";
import InputGroupName from "../CreateGroupPage/InputGroupName";

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
  align-items: center;
`;

const HomePageLogo = styled.img`
  margin-top: 100px;
  width: 324px;
  height: 137px;
`;

const ChoseGroup = styled.div`
  margin-top: 23px;
  font-size: 32px;
  color: white;
  font-weight: lighter;
`;
const SelectGroupContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateGroupImg = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
`;

const CreateGroupText = styled.div`
  font-size: 29px;
  text-align: center;
  color: white;
  margin-top: 17px;
  font-weight: lighter;
`;

const Group = styled.img`
  width: 180px;
  height: 180px;
  margin-right: 145px;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
`;
const GroupName = styled.div`
  font-size: 29px;
  text-align: center;
  margin-right: 145px;
  margin-top: 17px;
  color: white;
  font-weight: lighter;
`;

const ManageProFile = styled.img`
  width: 205px;
  height: 47px;
  margin-top: 68px;
  cursor: pointer;
`;

function SelectTeamPage() {
  return (
    <Wrapper style={{ backgroundImage: `url(${homePage})` }}>
      <HomePageLogo src={homePageLogo} alt="홈페이지 로고" />
      <ChoseGroup>이용할 팀을 선택해주세요.</ChoseGroup>
      <SelectGroupContainer>
        <GroupContainer>
          <Groups>
            <Group src={ChoseGroupImg} alt=" 첫번째 팀" />
            <GroupName>강물예배팀</GroupName>
          </Groups>

          <Groups>
            <Link to={"/InputGroupName"}>
              <CreateGroupImg src={CreateGroup} alt="팀 생성" />
            </Link>
            <CreateGroupText>팀 생성</CreateGroupText>
          </Groups>
        </GroupContainer>
      </SelectGroupContainer>
      <ManageProFile src={ManageProFileImg} alt="" />
    </Wrapper>
  );
}

export default SelectTeamPage;
