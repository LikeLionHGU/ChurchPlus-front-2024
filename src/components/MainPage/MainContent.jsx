import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import UploadMusicModal from "../../pages/MainPage/UploadMusicModal";
import viewListIcon from "../../assets/Icons/viewList.svg";
import viewGridIcon from "../../assets/Icons/viewGrid.svg";
import pageIcon from "../../assets/Icons/page.svg";
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
  border: 1px solid #3e5692;
  display: flex;
  flex-wrap: wrap;
`;

const SheetMusicItem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SheetMusicContainer = styled.div`
  /* width: 270px;
  height: 184px; */
  /* margin-right: 20px;
  margin-bottom: 29px;
  border-radius: 16px; */
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

  &:hover {
    filter: opacity(0.8) drop-shadow(0 0 0 #7b7b7b);
  }
`;

const SheetMusicDetails = styled.div`
  display: flex;
  align-items: center;

  img {
    /* border: 1px solid red; */
    margin-right: 20px;
  }
  span {
    /* border: 1px solid blue; */
    margin-right: 20px;
  }
`;

const ListViewHeader = styled.div`
  display: ${(props) =>
    props.isListView ? "block" : "none"}; /* 리스트 뷰일 때만 표시 */
  height: 20px;
  padding-bottom: 22px;
  font-family: "GmarketSansMedium";
  font-size: 15px;
  /* border: 1px solid red; */

  span {
    margin-right: 355px;
  }
`;

const GrayLine = styled.div`
  border-bottom: 1px solid #a6a6a6;
  padding-top: 19px;
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
        <ListViewHeader isListView={isListView}>
          <span>이름</span>
          <span>곡 버전</span>
          <span>Key</span>
        </ListViewHeader>
        {isListView
          ? sheetMusicData.map((sheetMusic, index) => (
              <SheetMusicItem key={index}>
                <SheetMusicDetails>
                  <img src={pageIcon} alt="페이지 아이콘" />
                  <span>{sheetMusic.title}</span>
                  <span>{sheetMusic.version} 버전</span>
                  <span>{sheetMusic.key}</span>
                </SheetMusicDetails>
                <GrayLine />
              </SheetMusicItem>
            ))
          : sheetMusicData.map((sheetMusic, index) => (
              <SheetMusicContainer>
                <SheetMusicImage
                  key={index}
                  src={sheetMusic.imageUrl}
                  alt={`악보 이미지 ${index}`}
                />
              </SheetMusicContainer>
            ))}
      </Contents>
      <SheetListView sheetMusicData={sheetMusicData} />
    </Wrapper>
  );
}

export default MainContent;
