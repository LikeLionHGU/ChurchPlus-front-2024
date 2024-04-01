import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profileIcon from "../../assets/Icons/profileIcon.svg";
import axios from "axios";
import Logo from "../../assets/logo/GroomLogo.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 203px;
  border-bottom: none;
  /* border: 2px solid red; */
`;

const GroomLogo = styled.div`
  padding-top: 18px;
  padding-left: 33px;
  cursor: pointer;
  img {
    height: 45px;
    width: 133px;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  justify-content: center;

  padding-top: 35px;
  padding-bottom: 16px;

  img {
    height: 90px;
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  padding-bottom: 18px;
`;

function SideBarUserInfo() {
  const [userData, setUserData] = useState([]);

  const groupId = localStorage.getItem("groupId");
  const memberId = localStorage.getItem("memberId");

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, memberId]);

  const fetchData = async () => {
    try {
      const serverResponse = await axios.get(
        // `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}/${memberId}`
        `${process.env.REACT_APP_HOST_URL}/church+/group/${groupId}/${memberId}`
      );
      setUserData(serverResponse.data);
      console.log("유저 정보 불러오기 성공");
    } catch (error) {
      console.error("유저 정보 불러오기 실패:", error);
      setUserData([]);
    }
  };

  return (
    <Wrapper>
      <GroomLogo>
        <img src={Logo} alt="groom 로고" />
      </GroomLogo>
      <ProfileIcon>
        <img src={profileIcon} alt="프로파일 아이콘" />
      </ProfileIcon>
      <Profile>
        {userData.nickname} | {userData.position}
      </Profile>
    </Wrapper>
  );
}

export default SideBarUserInfo;
