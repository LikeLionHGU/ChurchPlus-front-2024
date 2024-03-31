import React from "react";
import styled from "styled-components";
import homePage from "../../../asset/Images/Background/HomePage.svg";
import homePageLogo from "../../../asset/Images/Logos/HomePageLogo.svg";
import GoogleLoginBtn from "../../../asset/Images/Buttons/GoogleLoginBtn.svg";

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  height: 100vh;
  background-size: cover;
  flex-direction: column;
  align-items: center;
`;

const HomePageLogo = styled.img`
  margin-top: 240px;
  width: 324px;
  height: 137px;
`;

const HomePageBtn = styled.img`
  width: 375px;
  height: 60px;
  margin-top: 115px;
  cursor: pointer;
`;

const GoogleLogin = () => {
  //   const [randomIndex, setRandomIndex] = useState(0);

  //   //인덱스 지정을 위한 난수 생성기
  //   useEffect(() => {
  //     const newIndex = Math.floor(Math.random() * backgroundArr.length);
  //     setRandomIndex(newIndex);
  //   }, []);

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
		client_id=${process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID}
		&redirect_uri=${process.env.REACT_APP_GOOGLE_AUTH_REDIRECT_URI}
		&response_type=token
		&scope=email profile`;
  };

  return (
    <Wrapper style={{ backgroundImage: `url(${homePage})` }}>
      <HomePageLogo src={homePageLogo} alt="홈페이지 로고" />
      <HomePageBtn
        onClick={handleLogin}
        src={GoogleLoginBtn}
        alt="구글 로그인 버튼"
      />
    </Wrapper>
  );
};

export default GoogleLogin;
