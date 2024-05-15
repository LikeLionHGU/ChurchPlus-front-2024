import React from "react";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";
import ContiStorage from "../../components/MainPage/ContiStorage";
import Header from "../../components/MainPage/Header";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100vw - 203px);
  height: calc(100vh + 177px);
`;

function ContiStoragePage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Header menu={"콘티 보관함"} />
        <ContiStorage />
      </ContentWrapper>
    </Wrapper>
  );
}

export default ContiStoragePage;
