import React from "react";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";
import Header from "../../components/MainPage/Header";
import ContiPageContent from "../../components/CreateContiPage/ContiPageCotent";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100% - 203px);
  height: calc(100vh + 177px);
`;

function CreateContiPage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Header menu={"콘티 생성하기"} />
        <ContiPageContent />
      </ContentWrapper>
    </Wrapper>
  );
}

export default CreateContiPage;
