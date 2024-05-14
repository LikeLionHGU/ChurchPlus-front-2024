import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import UploadMusicModal from "../../pages/MainPage/UploadMusicModal";
import viewListIcon from "../../assets/Icons/viewList.svg";
import viewGridIcon from "../../assets/Icons/viewGrid.svg";
import SheetListView from "./SheetListView";

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
  width: 100%;
  /* border: 1px solid #3e5692; */
`;

const Icons = styled.div`
  margin-left: auto;
  padding-top: 9px;
  /* border: 1px solid red; */
  height: 24px;
  padding-right: 46px;
  img {
    margin-right: 11px;
    cursor: pointer;
  }
`;

const Contents = styled.div`
  width: 100%;
  /* border: 1px solid #3e5692; */
  display: flex;
  flex-wrap: wrap;
`;

const SheetMusicContainer = styled.div`
  position: relative;

  &:hover .sheet-music-image {
    filter: brightness(60%);
    transform: scale(1.1);
    transform-origin: center;
  }

  &:hover .sheet-info-overlay {
    opacity: 1;
  }
`;

const SheetMusicImage = styled.img`
  width: 275px;
  height: 184px;
  object-fit: cover;
  object-position: top;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 29px;
  border-radius: 16px;
  filter: opacity(0.7) drop-shadow(0 0 0 #bdbdbd);
  transition: filter 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

const SheetInfoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 23px;
  opacity: 0;
  color: White;
  transition: opacity 0.3s ease-in-out;

  p {
    position: absolute;
    bottom: 88px;
  }
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
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
    },
    {
      imageUrl:
        "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDZfMTc4/MDAxNTI4MjY3MzQ0NDM0.y2pvrCJr79epCxzn2zResj-6HBlmC5FbzH233jBUXZIg.jiikNEE7d1Jg6xQv4eWRyI5C7Zfg1t3ohmQuge-OZMsg.JPEG.lhy21ch/6773cda6c41114d62ed77d8bb8301588.jpg?type=w800",
      key: "C",
      title: "기쁨의 옷을 입은",
      version: "어노인팅",
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
        {isListView ? (
          <SheetListView sheetMusicData={sheetMusicData} />
        ) : (
          sheetMusicData.map((sheetMusic, index) => (
            <div key={index}>
              <SheetMusicContainer>
                <SheetMusicImage
                  className="sheet-music-image"
                  src={sheetMusic.imageUrl}
                  alt={`악보 이미지 ${index}`}
                />
                <SheetInfoOverlay className="sheet-info-overlay">
                  <p>
                    {sheetMusic.title} | {sheetMusic.key} Key
                  </p>
                </SheetInfoOverlay>
              </SheetMusicContainer>
            </div>
          ))
        )}
      </Contents>
    </Wrapper>
  );
}

export default MainContent;
