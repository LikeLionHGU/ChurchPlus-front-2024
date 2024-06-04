import React, { useEffect } from "react";
import sendKakaoCodeToBackend from "../../../apis/sendKakaoCodeToBackend";
import sendAccessTokenToBackend from "../../../apis/sendAccessTokenToBackend";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginLoding = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-top: 100px;
`;

const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // code 추출
    const parsedQuery = new URLSearchParams(window.location.search);
    const code = parsedQuery.get("code");
    console.log(code);

    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = parsedHash.get("access_token");
    console.log(accessToken);

    // code가 존재하면 백엔드로 전송하고 페이지 이동
    if (code) {
      sendKakaoCodeToBackend(code).then(() => {
        navigate("/SelectTeamPage"); // 로그인 후 팀생성 페이지 이동
      });
    }
    if (accessToken) {
      sendAccessTokenToBackend(accessToken).then(() => {
        navigate("/SelectTeamPage"); // 로그인 후 팀생성 페이지 이동
      });
    }
  }, [navigate]
);

  

  return (
    <div>
      <LoginLoding>로그인 중입니다...</LoginLoding>
    </div>
  );
};

export default Loading;
