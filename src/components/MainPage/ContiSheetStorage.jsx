import React, { useState } from "react";
import styled from "styled-components";
import SelectMonthDropdown from "./SelectMonthDropDown";
import SelectYearDropdown from "./SelectYearDropDown";
import { useSetRecoilState } from "recoil";
import { readMusicModalState } from "../../atom";

const DateContainer = styled.div`
  /* border: 1px solid blue; */
  font-family: "GmarketSansLight";
  font-size: 20px;
  margin-top: 5px;
  margin-left: 36px;
  display: flex;
`;

const ContiContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: Wrap;
  margin-left: 20px;
  margin-top: 15px;
`;

const Contents = styled.div`
  margin-left: 20px;
  min-width: 1180px;
  /* border: 1px solid #3e5692; */
  display: flex;
  flex-wrap: wrap;
`;

const SheetMusicContainer = styled.div`
  position: relative;
  /* border: 1px solid #3e5692; */

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
  filter: opacity(0.7) drop-shadow(0 0 0 #bdbdbd);
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

const sheetMusic = [
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music1",
    musicId: 1,
    musicName: "Music 1",
    code: "C",
  },
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music2",
    musicId: 2,
    musicName: "Music 2",
    code: "D",
  },
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music3",
    musicId: 3,
    musicName: "Music 3",
    code: "E",
  },
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music3",
    musicId: 3,
    musicName: "Music 3",
    code: "E",
  },
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music3",
    musicId: 3,
    musicName: "Music 3",
    code: "E",
  },
  {
    musicImageUrl: "https://dummyimage.com/200x200/000/fff&text=Music3",
    musicId: 3,
    musicName: "Music 3",
    code: "E",
  },
];

export default function ContiSheetStorage() {
  const readMusicModal = useSetRecoilState(readMusicModalState);
  const toggleReadMusicModal = () => {
    readMusicModal((prevState) => !prevState);
  };
  const [musicId, setMusicId] = useState(null);

  return (
    <>
      <DateContainer>
        <SelectYearDropdown />
        <SelectMonthDropdown />
      </DateContainer>
      <ContiContainer>
        <Contents>
          {sheetMusic.map((sheet, index) => (
            <SheetMusicContainer key={index}>
              <SheetMusicImage
                className="sheet-music-image"
                src={sheet.musicImageUrl}
                alt={`악보 이미지 ${index}`}
              />
              <SheetInfoOverlay
                className="sheet-info-overlay"
                onClick={() => {
                  toggleReadMusicModal();
                  setMusicId(sheet.musicId);
                }}
              >
                <p>
                  {sheet.musicName} | {sheet.code} Key
                </p>
              </SheetInfoOverlay>
            </SheetMusicContainer>
          ))}
        </Contents>
      </ContiContainer>
    </>
  );
}