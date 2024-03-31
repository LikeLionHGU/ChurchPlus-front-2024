import React from "react";
import styled from "styled-components";
import homePage from "../../asset/Images/Background/HomePage.svg";
import homePageLogo from "../../asset/Images/Logos/HomePageLogo.svg";
import LoginBtn from "../../asset/Images/Buttons/LonginBtn.svg";
import SignupBtn from "../../asset/Images/Buttons/SignupBtn.svg";
import { useNavigate } from "react-router";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-size: cover;
  flex-direction: row;
`;

const Video = styled.div`
  border: 1px solid black;
  width: 822px;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const Starting = styled.div`
  border: 1px solid black;
  width: 618px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePageLogo = styled.img`
  width: 311px;
  height: 131px;
  margin-top: 210px;
`;

const StartingText = styled.div`
  width: 120px;
  height: 32px;
  /* font-weight: lighter; */
  font-size: 28px;
  color: white;
  margin-top: 64px;
`;

const BtnContainer = styled.div`
  width: 390px;
  height: 39px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 22px;
`;

const LoginSignupBtn = styled.img`
  width: 178px;
  height: 39px;
  border-radius: 10px;
  cursor: pointer;
`;

function HomePage() {
  const navigate = useNavigate();
  const handleLoginBtnClick = () => {
    navigate("/LoginPage");
  };
  return (
    <Wrapper>
      <Video>영상자리</Video>
      <Starting style={{ backgroundImage: `url(${homePage})` }}>
        <HomePageLogo src={homePageLogo} alt="홈페이지 로고" />
        <StartingText>시작하기</StartingText>
        <BtnContainer>
          <LoginSignupBtn src={LoginBtn} alt="" onClick={handleLoginBtnClick} />
          <LoginSignupBtn
            src={SignupBtn}
            alt=""
            onClick={handleLoginBtnClick}
          />
        </BtnContainer>
      </Starting>
    </Wrapper>
  );
}

export default HomePage;
