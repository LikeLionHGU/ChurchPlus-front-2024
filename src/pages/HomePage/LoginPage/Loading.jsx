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
    const fetchData = async () => {
      try {
        const parsedQuery = new URLSearchParams(window.location.search);
        const code = parsedQuery.get("code");
        const parsedHash = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = parsedHash.get("access_token");

        if (code) {
          await sendKakaoCodeToBackend(code);
          navigate("/SelectTeamPage");
        } else if (accessToken) {
          await sendAccessTokenToBackend(accessToken);
          navigate("/SelectTeamPage");
        }
      } catch (error) {
        console.error("로그인 과정에서 에러가 발생했습니다.", error);
        // 에러 처리 로직 추가
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <LoginLoding>로그인 중입니다...</LoginLoding>
    </div>
  );
};

export default Loading;
