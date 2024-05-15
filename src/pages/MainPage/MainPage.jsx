import React from "react";
import MainContent from "../../components/MainPage/MainContent";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";
import Header from "../../components/MainPage/Header";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100vw - 203px);
  height: calc(100vh + 177px);
`;

function MainPage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Header menu={"악보 보관함"} />
        <MainContent />
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainPage;
