import React from "react";
import Header from "../../components/MainPage/Header";
import ManageTeam from "../../components/MainPage/ManageTeam";
import SideBar from "../../components/MainPage/SideBar";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  width: calc(100vw - 203px);
  height: calc(100vh + 177px);
`;

function ManageTeamPage() {
  return (
    <Wrapper>
      <SideBar />
      <ContentWrapper>
        <Header />
        <ManageTeam />
      </ContentWrapper>
    </Wrapper>
  );
}

export default ManageTeamPage;
