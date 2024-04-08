import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import VersionSelectDropdown from "./VersionSelectDropdown";
import AddBtn from "./AddBtn";
import IntroModal from "../../pages/MainPage/IntroModal";

const Wrapper = styled.div`
  /* border: 2px solid pink; */
  height: 100%;
  padding-left: 56px;
`;

const ShowMonth = styled.div`
  margin-top: 45px;
  margin-bottom: 27px;
  font-size: 27px;
  width: calc(100% - 64px);
  /* border: 1px solid #3e5692; */
  color: #3e5692;
`;

const FunctionWrapper = styled.div`
  display: flex;
  height: 42px;
  margin-bottom: 34px;
  width: calc(100% - 64px);
  /* border: 1px solid #3e5692; */
`;

const Contents = styled.div`
  height: 75%;
  width: calc(100% - 64px);
  border: 1px solid #3e5692;
`;

function MainContent() {
  const [, setSearch] = useState("");

  return (
    <Wrapper>
      <ShowMonth>3월</ShowMonth>
      <FunctionWrapper>
        <SearchBar setSearch={setSearch} />
        <KeySelectDropdown />
        <VersionSelectDropdown />
        <AddBtn />
        <IntroModal />
      </FunctionWrapper>
      <Contents>폴더, 악보</Contents>
    </Wrapper>
  );
}

export default MainContent;
