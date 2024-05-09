import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import VersionSelectDropdown from "./VersionSelectDropdown";
import UploadMusicModal from "../../pages/MainPage/UploadMusicModal";

const Wrapper = styled.div`
  /* border: 2px solid pink; */
  height: 100%;
  padding-top: 23px;
  padding-left: 36px;
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
      <FunctionWrapper>
        <SearchBar setSearch={setSearch} placeholder="곡 제목 검색" />
        <SearchBar setSearch={setSearch} placeholder="곡 버전 검색" />
        <KeySelectDropdown />
        <VersionSelectDropdown />
        <UploadMusicModal />
      </FunctionWrapper>
      <Contents>폴더, 악보</Contents>
    </Wrapper>
  );
}

export default MainContent;
