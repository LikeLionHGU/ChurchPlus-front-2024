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
  height: 100vh;
  width: calc(100% - 20px);
  border: 1px solid #3e5692;
  display: flex;
  flex-wrap: wrap;
`;

const SheetMusicItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SheetMusicImage = styled.img`
  width: 270px;
  height: 184px;
  margin-right: 20px;
  margin-bottom: 29px;
  border-radius: 16px;
  cursor: pointer;
`;

const SheetMusicDetails = styled.div`
  margin-bottom: 10px;
`;

function MainContent() {
  const [isListView, setIsListView] = useState(false);
  const [, setSearch] = useState("");

  // 악보이미지 더미
  const sheetMusicData = [
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "주님 말씀하시면",
      version: "마커스",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
  ];

  return (
    <Wrapper>
      <FunctionWrapper>
        <SearchBar setSearch={setSearch} placeholder="곡 제목 검색" />
        <SearchBar setSearch={setSearch} placeholder="곡 버전 검색" />
        <KeySelectDropdown />
        <UploadMusicModal />

        <Icons>
          <img
            src={viewListIcon}
            alt="리스트뷰 아이콘"
            onClick={() => setIsListView(true)}
          />
          <img
            src={viewGridIcon}
            alt="그리드뷰 아이콘"
            onClick={() => setIsListView(false)}
          />
        </Icons>
      </FunctionWrapper>
      <Contents>
        {isListView
          ? sheetMusicData.map((sheetMusic, index) => (
              <SheetMusicItem key={index}>
                <SheetMusicDetails>
                  <p>이름: {sheetMusic.title}</p>
                  <p>곡 버전: {sheetMusic.version}</p>
                  <p>Key: {sheetMusic.key}</p>
                </SheetMusicDetails>
              </SheetMusicItem>
            ))
          : sheetMusicData.map((sheetMusic, index) => (
              <SheetMusicImage
                key={index}
                src={sheetMusic.imageUrl}
                alt={`악보 이미지 ${index}`}
              />
            ))}
      </Contents>
    </Wrapper>
  );
}

export default MainContent;
