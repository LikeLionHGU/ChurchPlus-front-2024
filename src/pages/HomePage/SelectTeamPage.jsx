import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import homePage from "../../asset/Images/Background/HomePage.svg";
import homePageLogo from "../../asset/Images/Logos/HomePageLogo.svg";
import ChoseGroupImg from "../../asset/Images/Icons/ChoseGroupImg.svg";
import CreateGroup from "../../asset/Images/Icons/CreateGroup.svg";
import ManageProFileImg from "../../asset/Images/Buttons/ManageProFile.svg";
import { Link } from "react-router-dom";
import InputGroupName from "../CreateGroupPage/InputGroupName";
import groupList from "../../apis/groupList";
import { newMemberState } from "../../atom";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
  align-items: center;
`;

const HomePageLogo = styled.img`
  margin-top: 110px;
  width: 271px;
  height: 101px;
`;

const ChoseGroup = styled.div`
  margin-top: 40px;
  font-size: 35px;
  color: black;
  font-weight: 100;
`;
const SelectGroupContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const GroupContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Groups = styled.div`
  display: flex;
  flex-direction: column;
`;

const CreateGroupImg = styled.div`
  display: flex;
  background-color: #efeff0;
  justify-content: center;
  align-items: center;
  width: 230px;
  height: 230px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.25);
`;

const CreateGroupText = styled.div`
  font-size: 25px;
  text-align: center;
  color: black;
  margin-top: 17px;
  font-weight: lighter;
`;

const Group = styled.img`
  width: 230px;
  height: 230px;
  margin-right: 145px;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
`;
const GroupName = styled.div`
  font-size: 25px;
  text-align: center;
  margin-right: 145px;
  margin-top: 17px;
  color: black;
  font-weight: lighter;
`;

const AlreadyHaveTeamText = styled.div`
  margin-left: auto;
  margin-right: 100px;
  text-decoration: underline;
  margin-top: 65px;
  cursor: pointer;
  color: #474b54;
`;

function SelectTeamPage() {
const memberId = localStorage.getItem("memberId");
const [groups,setGroups] = useState([]);
const isNew = localStorage.getItem("isNew")
const getNewMemberState = useSetRecoilState(newMemberState);
console.log("isNew", isNew)
getNewMemberState(isNew);
  
useEffect(() => {
  const fetchGroups = async () => {
    const fetchedGroups = await groupList(memberId);
    setGroups(fetchedGroups);
  };
  fetchGroups();
}, [memberId]);

const handleTeamClick = (group) => {
  // alert(`${group.groupName}팀을 선택하셨습니다.`);
  localStorage.setItem("groupId", group.groupId);
};

  return (
    <Wrapper>
      <HomePageLogo src={homePageLogo} alt="홈페이지 로고" />
      <ChoseGroup>이용할 팀을 선택해주세요.</ChoseGroup>
      <SelectGroupContainer>
        <GroupContainer>
          
              {groups.map((group,index) =>(
                <div key={index}>
            <Groups>
            <Link to={"/main"}>
            <Group src={ChoseGroupImg} alt=" 첫번째 팀" 
            onClick={() => handleTeamClick(group)}/>
            </Link>
            <GroupName>{group.groupName}</GroupName>
          </Groups>
                </div>
              ))}
              

          <Groups>
            <Link to={"/CreateNewGroup"}>
              <CreateGroupImg>
                <img src={CreateGroup} alt=""></img>
              </CreateGroupImg>
            </Link>
            <CreateGroupText>팀 생성</CreateGroupText>
          </Groups>
        </GroupContainer>
      </SelectGroupContainer>
      <Link to={"/JoinGroup"}>
      <AlreadyHaveTeamText>이미 팀이 있으신가요?</AlreadyHaveTeamText>
      </Link>
    </Wrapper>
  );
}

export default SelectTeamPage;
