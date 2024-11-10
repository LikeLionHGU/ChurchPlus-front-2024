import React from "react";
import styled from "styled-components";
import homePage from "../../../asset/Images/Background/HomePage.svg";
import homePageLogo from "../../../asset/Images/Logos/HomePageLogo.svg";
import GoogleLoginBtn from "../../../asset/Images/Buttons/GoogleLoginBtn.svg";
import KakaoLoginBtn from "../../../asset/Images/Buttons/KakaoLoginBtn.svg";
import LoginBackground from "../../../asset/Images/Background/LoginBackground.svg";

const ContainerWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftContainer = styled.img``;

const RightContainer = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePageLogo = styled.img`
  width: 240px;
  height: 90px;
`;

const IntroText = styled.div`
  font-size: 28px;
  margin-top: 17px;
  span {
    font-family: "GmarketSansLight";
  }
  div {
    margin-top: 16px;
  }
`;

const GoogleLoginButton = styled.img`
  margin-top: 70px;
  cursor: pointer;
`;

const KakaoLoginButton = styled.img`
  margin-top: 25px;
  cursor: pointer;
`;

const GoogleLogin = () => {
  //   const [randomIndex, setRandomIndex] = useState(0);

  //   //인덱스 지정을 위한 난수 생성기
  //   useEffect(() => {
  //     const newIndex = Math.floor(Math.random() * backgroundArr.length);
  //     setRandomIndex(newIndex);
  //   }, []);

  const handleGoogleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=token
		&scope=email profile`;
  };
  const handleKakaoLogin = () => {
    // 카카오 로그인 화면으로 이동시키기
    const Rest_api_key = process.env.REACT_APP_KAKAO_AUTH_CLIENT_ID;
    const redirect_uri = process.env.REACT_APP_KAKAO_AUTH_REDIRECT_URL;

    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  };
  return (
    <ContainerWrapper>
      <LeftContainer src={LoginBackground} alt="" />
      <RightContainer>
        <HomePageLogo src={homePageLogo} alt="홈페이지 로고" />
        <IntroText>
          구름<span>처럼 흩어져있는</span>
          <div>
            {" "}
            <span>악보들을 한 곳에서</span>, 구름
          </div>
        </IntroText>
        <GoogleLoginButton onClick={handleGoogleLogin} src={GoogleLoginBtn} alt="구글 로그인 버튼" />
        <KakaoLoginButton onClick={handleKakaoLogin} src={KakaoLoginBtn} alt="카카오 로그인 버튼" />
      </RightContainer>
    </ContainerWrapper>
  );
};

export default GoogleLogin;
