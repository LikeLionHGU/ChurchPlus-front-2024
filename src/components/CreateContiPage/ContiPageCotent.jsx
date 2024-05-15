import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "../MainPage/SearchBar";
import KeySelectDropdown from "../MainPage/KeySelectDropdown";
import { BlueText } from "../CreateGroupPage/Text";
import checkIcon from "../../assets/Icons/check.svg";
import nextBtnIcon from "../../assets/Icons/nextStepBtn.svg";

const Wrapper = styled.div`
  /* border: 2px solid pink; */
  height: 100%;
  padding-left: 36px;
`;

const FunctionWrapper = styled.div`
  display: flex;
  height: 66px;
  margin-bottom: 33px;
  width: 100%;
  /* border: 1px solid #3e5692; */
`;

const SearchComponents = styled.div`
  display: flex;
  padding-top: 23px;
`;

const Info = styled.div`
  margin-left: auto;
  margin-right: 40px;
`;

const SelectConti = styled.div`
  font-size: 16px;
  margin-bottom: 14px;
  img {
    height: 20px;
    vertical-align: middle;
  }
`;
const NumOfConti = styled.div`
  font-size: 24px;
  img {
    height: 24px;
    vertical-align: middle;
    padding-left: 10px;
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
  margin-right: 20px;
  margin-bottom: 29px;
  border-radius: 16px;
  filter: opacity(0.7) drop-shadow(0 0 0 #292929);
  transition: filter 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

const SheetInfoOverlay = styled.div`
  cursor: pointer;
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

function ContiPageContent() {
  const [titleSearch, setTitleSearch] = useState("");
  const [versionSearch, setVersionSearch] = useState("");

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

  const filteredData = sheetMusicData.filter((sheetMusic) => {
    const formattedTitle = sheetMusic.title.toLowerCase().replace(/\s/g, "");
    const formattedVersion = sheetMusic.version
      .toLowerCase()
      .replace(/\s/g, "");

    const formattedTitleSearch = titleSearch.toLowerCase().replace(/\s/g, "");
    const formattedVersionSearch = versionSearch
      .toLowerCase()
      .replace(/\s/g, "");

    return (
      formattedTitle.includes(formattedTitleSearch) &&
      formattedVersion.includes(formattedVersionSearch)
    );
  });

  return (
    <Wrapper>
      <FunctionWrapper>
        <SearchComponents>
          <SearchBar setSearch={setTitleSearch} placeholder="곡 제목 검색" />
          <SearchBar setSearch={setVersionSearch} placeholder="곡 버전 검색" />
          <KeySelectDropdown />
        </SearchComponents>
        <Info>
          <SelectConti>
            곡을 선택해주세요
            <img src={checkIcon} alt="체크 아이콘" />
          </SelectConti>
          <NumOfConti>
            현재 <BlueText>2</BlueText>곡이 담겨있어요
            <img src={nextBtnIcon} alt="다음버튼 아이콘" />
          </NumOfConti>
        </Info>
      </FunctionWrapper>
      <Contents>
        {filteredData.map((sheetMusic, index) => (
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
        ))}
      </Contents>
    </Wrapper>
  );
}

export default ContiPageContent;
