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

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
  align-items: center;
`;

const HomePageLogo = styled.img`
  margin-top: 88px;
  width: 271px;
  height: 101px;
`;

const ChoseGroup = styled.div`
  margin-top: 35px;
  font-size: 35px;
  color: black;
  font-weight: 100;
  font-family: "GmarketSansLight";
`;
const SelectGroupContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
  font-family: "GmarketSansLight";
`;

const Group = styled.div`
  width: 240px;
  height: 240px;
  margin-right: 145px;
  border-radius: 30px;
  cursor: pointer;
  overflow: hidden;
  /* border: 1px solid red;ㄴ */

  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.25);
`;

const DefaultGroupImg = styled.img`
  /* border: 1px solid green; */
  width: 100%;
  height: 100%;
`;

const GroupName = styled.div`
  font-size: 25px;
  text-align: center;
  margin-right: 145px;
  margin-top: 17px;
  color: black;
  font-family: "GmarketSansLight";
`;

const ButtomContainer = styled.div`
  display: flex;
  justify-content: right;
  width: 100vw;
  /* border: 1px solid red; */
`;

const AlreadyHaveTeamText = styled.div`
  /* border: 1px solid green; */
  text-decoration: underline;
  margin-right: 118px;
  margin-top: 65px;
  cursor: pointer;
  color: #474b54;
  font-size: 18px;
  font-family: "GmarketSansLight";
`;

function SelectTeamPage() {
  const memberId = localStorage.getItem("memberId");
  const [groups, setGroups] = useState([]);

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
          {groups.map((group, index) => (
            <div key={index}>
              <Groups>
                <Link to={"/main"}>
                  <Group>
                    <DefaultGroupImg
                      src={ChoseGroupImg}
                      alt=" 첫번째 팀"
                      onClick={() => handleTeamClick(group)}
                    />
                  </Group>
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
      <ButtomContainer>
        <Link to={"/JoinGroup"}>
          <AlreadyHaveTeamText>이미 팀이 있으신가요?</AlreadyHaveTeamText>
        </Link>
      </ButtomContainer>
    </Wrapper>
  );
}

export default SelectTeamPage;
