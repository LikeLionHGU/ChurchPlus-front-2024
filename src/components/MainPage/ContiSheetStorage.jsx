import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectMonthDropdown from "./SelectMonthDropDown";
import SelectYearDropdown from "./SelectYearDropDown";
import { useSetRecoilState } from "recoil";
import { contiIdState, contiMusicIndexState, musicIdState, readMusicModalMemoState } from "../../atom";
import getContiMusicList from "../../apis/getcontiMusicList";
import ModifyContiModal from "../Modal/ModifyContiModal";
import ReadContiModalMemo from "../Modal/ReadContiModalMemo";
import ContiSheetMonthDropDown from "./ContiSheetMonthDropDown";
import ContiSheetYearDropDown from "./ContiSheetYearDropDown";

const DateContainer = styled.div`
  font-family: "GmarketSansLight";
  font-size: 20px;
  margin-top: 5px;
  margin-left: 36px;
  display: flex;
`;

const ContiContainer = styled.div`
  display: flex;
  flex-wrap: Wrap;
  margin-left: 20px;
  margin-top: 15px;
`;

const Contents = styled.div`
  margin-left: 20px;
  min-width: 1180px;
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

const ContiName = styled.div`
  font-family: "GmarketSansLight";
  font-size: 20px;
  margin-top: 13px;
`;

export default function ContiSheetStorage() {
  const readMusicModal = useSetRecoilState(readMusicModalMemoState);
  const [sheetMusic, setSheetMusic] = useState([]);
  const [monthSearch, setMonthSearch] = useState("06");
  const [yearSearch, setYearSearch] = useState("2024");
  const setContiMusicIndex = useSetRecoilState(contiMusicIndexState);
  const setMusicId = useSetRecoilState(musicIdState);
  const setListId = localStorage.getItem("setListId");
  const contiName = localStorage.getItem("setListName");

  const toggleReadMusicModal = () => {
    readMusicModal((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchMusicList = async () => {
      const fetchedMusicList = await getContiMusicList(setListId);
      setSheetMusic(fetchedMusicList);
    };
    fetchMusicList();
  }, [setListId]);

  return (
    <>
      <DateContainer>
        <ReadContiModalMemo />
        <ContiSheetYearDropDown />
        <ContiSheetMonthDropDown />
        <ContiName>{contiName}</ContiName>
      </DateContainer>
      <ContiContainer>
        <Contents>
          {sheetMusic.map((sheet, index) => (
            <SheetMusicContainer key={index}>
              <SheetMusicImage className="sheet-music-image" src={sheet.musicImageUrl} alt={`악보 이미지 ${index}`} />
              <SheetInfoOverlay
                className="sheet-info-overlay"
                onClick={() => {
                  toggleReadMusicModal();
                  localStorage.setItem("musicId", sheet.musicId);
                  setContiMusicIndex(index);
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
