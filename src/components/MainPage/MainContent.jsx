import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import KeySelectDropdown from "./KeySelectDropdown";
import UploadMusicModal from "../../pages/MainPage/UploadMusicModal";
import viewListIcon from "../../assets/Icons/viewList.svg";
import viewGridIcon from "../../assets/Icons/viewGrid.svg";
import SheetListView from "./SheetListView";
import IntroModal from "../../pages/MainPage/Intro/IntroModal";
import SearchBarModal from "../../pages/MainPage/Intro/SearchBarModal";
import KeyModal from "../../pages/MainPage/Intro/KeyModal";
import UploadModal from "../../pages/MainPage/Intro/UploadModal";
import DefaultGroomImg from "../../assets/Icons/DefaultGroom.svg";
import getMusicList from "../../apis/getMusicList";
import { useSetRecoilState } from "recoil";
import { musicIdState, readMusicModalState } from "../../atom";
import { useRecoilState } from "recoil";
import ModifyContiModal from "../Modal/ModifyContiModal";

const Wrapper = styled.div`
  /* border: 2px solid pink; */
  height: 100%;
  padding-top: 23px;
  padding-left: 36px;
`;

const FunctionWrapper = styled.div`
  position: relative;
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
  min-width: 70px;
  padding-right: 46px;
  img {
    margin-right: 11px;
    cursor: pointer;
  }
`;

const Contents = styled.div`
  min-width: 1200px;
  /* border: 1px solid #3e5692; */
  display: flex;
  flex-wrap: wrap;
`;

const DefaultSection = styled.div`
  /* border: 1px solid #3e5692; */
  width: 322px;
  height: 316px;
  margin-top: 173px;
  margin-left: 360px;

  img {
    margin-left: 17px;
    height: 209;
    width: 288px;
  }
`;

const DefaultText = styled.div`
  font-size: 30px;
  color: #aec3de;
  margin-left: 4px;
  margin-top: 64px;
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

function MainContent() {
  const [isListView, setIsListView] = useState(false);
  const [titleSearch, setTitleSearch] = useState("");
  const [versionSearch, setVersionSearch] = useState("");
  const [keySearch, setKeySearch] = useState("");
  const [sheetMusicData, setsheetMusicData] = useState([]);
  const groupId = localStorage.getItem("groupId");
  const [musicId, setMusicId] = useRecoilState(musicIdState);
  const setReadMusicModal = useSetRecoilState(readMusicModalState);

  useEffect(() => {
    const fetchMusicList = async () => {
      const fetchedMusicList = await getMusicList(groupId);
      setsheetMusicData(fetchedMusicList);
    };
    fetchMusicList();
  }, [groupId]);
  console.log("sheetMusicData:", sheetMusicData);

  const toggleReadMusicModal = () => {
    setReadMusicModal((prevState) => !prevState);
  };

  console.log("musicId is:", musicId);

  const filteredData = sheetMusicData.filter((sheetMusic) => {
    const formattedTitle = sheetMusic.musicName ? sheetMusic.musicName.toLowerCase().replace(/\s/g, "") : "";
    const formattedVersion = sheetMusic.version ? sheetMusic.version.toLowerCase().replace(/\s/g, "") : "";
    const formattedTitleSearch = titleSearch.toLowerCase().replace(/\s/g, "");
    const formattedVersionSearch = versionSearch.toLowerCase().replace(/\s/g, "");

    return (
      formattedTitle.includes(formattedTitleSearch) &&
      formattedVersion.includes(formattedVersionSearch) &&
      (keySearch === "" || sheetMusic.code === keySearch)
    );
  });

  return (
    <Wrapper>
      <KeyModal />
      <FunctionWrapper>
        <SearchBar setSearch={setTitleSearch} placeholder="곡 제목 검색" />
        <SearchBarModal />
        <SearchBar setSearch={setVersionSearch} placeholder="곡 버전 검색" />
        <KeySelectDropdown setSearch={setKeySearch} />
        <UploadMusicModal />
        <IntroModal />
        <UploadModal />
        <Icons>
          <img src={viewListIcon} alt="리스트뷰 아이콘" onClick={() => setIsListView(true)} />
          <img src={viewGridIcon} alt="그리드뷰 아이콘" onClick={() => setIsListView(false)} />
        </Icons>
      </FunctionWrapper>
      <Contents>
        {sheetMusicData.length === 0 && filteredData.length === 0 ? (
          <DefaultSection>
            <img src={DefaultGroomImg} alt="디폴트 구름 이미지"></img>
            <DefaultText>악보를 업로드 해보세요!</DefaultText>
          </DefaultSection>
        ) : isListView ? (
          <SheetListView
            sheetMusicData={filteredData}
            onMusicClick={(musicId) => {
              console.log("Clicked on music with ID:", musicId);
              setMusicId(musicId);
              toggleReadMusicModal();
            }}
          />
        ) : (
          filteredData.map((sheetMusic, index) => (
            <div key={index}>
              <SheetMusicContainer>
                <SheetMusicImage
                  className="sheet-music-image"
                  src={sheetMusic.musicImageUrl}
                  alt={`악보 이미지 ${index}`}
                />
                <SheetInfoOverlay
                  className="sheet-info-overlay"
                  onClick={() => {
                    setMusicId(sheetMusic.musicId);
                    toggleReadMusicModal();
                  }}
                >
                  <p>
                    {sheetMusic.musicName} | {sheetMusic.code} Key
                  </p>
                </SheetInfoOverlay>
              </SheetMusicContainer>
            </div>
          ))
        )}
        <ModifyContiModal />
      </Contents>
    </Wrapper>
  );
}

export default MainContent;
