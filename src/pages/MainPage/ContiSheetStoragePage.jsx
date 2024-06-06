import React from "react";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";
import Header from "../../components/MainPage/Header";
import ContiSheetStorage from "../../components/MainPage/ContiSheetStorage";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 203px);
  height: calc(100vh + 177px);
`;

function ContiSheetStoragePage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Header menu={"콘티 보관함"} />
        <ContiSheetStorage />
      </ContentWrapper>
    </Wrapper>
  );
}

export default ContiSheetStoragePage;
