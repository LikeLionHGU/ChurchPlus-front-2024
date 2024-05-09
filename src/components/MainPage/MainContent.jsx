import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import UploadMusicModal from "../../pages/MainPage/UploadMusicModal";
import viewListIcon from "../../assets/Icons/viewList.svg";
import viewGridIcon from "../../assets/Icons/viewGrid.svg";

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
  width: calc(100% - 20px);
  /* border: 1px solid #3e5692; */
`;

const Icons = styled.div`
  padding-left: 233px;
  padding-top: 9px;
  /* border: 1px solid red; */
  height: 24px;

  img {
    margin-right: 11px;
    cursor: pointer;
  }
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
        <UploadMusicModal />

        <Icons>
          <img src={viewListIcon} alt="리스트뷰 아이콘"></img>
          <img src={viewGridIcon} alt="그리드뷰 아이콘"></img>
        </Icons>
      </FunctionWrapper>
      <Contents>폴더, 악보</Contents>
    </Wrapper>
  );
}

export default MainContent;
