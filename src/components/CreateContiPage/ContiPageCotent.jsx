import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "../MainPage/SearchBar";
import KeySelectDropdown from "../MainPage/KeySelectDropdown";
import { BlueText } from "../CreateGroupPage/Text";
import checkIcon from "../../assets/Icons/check.svg";
import nextBtnIcon from "../../assets/Icons/nextStepBtn.svg";
import SelectContiOrderList from "./SelectContiOrderList";
import { useRecoilValue } from "recoil";
import { selectedRowsAtom } from "../../recoil/atoms/selectRowsAtom";
import getMusicList from "../../apis/getMusicList";
import { useSetRecoilState } from "recoil";
import { contiStepModalState } from "../../atom";
import ContiStepModal from "../Modal/ContiStepModal";

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
  font-size: 17px;
  margin-bottom: 12px;
  text-align: right;
  img {
    height: 27px;
    padding-top: 2px;
    vertical-align: middle;
  }
`;
const NumOfConti = styled.div`
  font-size: 24px;
  min-width: 300px;
  img {
    height: 25px;
    vertical-align: middle;
    padding-left: 10px;
    padding-bottom: 4px;
    cursor: pointer;
  }
`;

const Contents = styled.div`
  /* width: 100%; */
  min-width: 1200px;
  /* border: 1px solid #3e5692; */
  display: flex;
  flex-wrap: wrap;
`;

function ContiPageContent() {
  const [titleSearch, setTitleSearch] = useState("");
  const [versionSearch, setVersionSearch] = useState("");
  const [keySearch, setKeySearch] = useState("");
  const [sheetMusicData, setsheetMusicData] = useState([]);
  const selectedRows = useRecoilValue(selectedRowsAtom);
  const groupId = localStorage.getItem("groupId");
  const setContiStepModalState = useSetRecoilState(contiStepModalState);
  
  const toggleContiStepModal = () => {
    selectedRows.length > 0 && setContiStepModalState((prevState) => !prevState);
  };

  useEffect(() => {
    return () => {
      console.log("ContiPageContent Closed");
      setContiStepModalState(false);
    }
  })

    console.log("toggleContiStepModal",contiStepModalState);


  useEffect(() => {
    const fetchMusicList = async () => {
      const fetchedMusicList = await getMusicList(groupId);
      setsheetMusicData(fetchedMusicList);
    };
    fetchMusicList();
  }, [groupId]);
console.log("sheetMusicData:",sheetMusicData);

  const filteredData = sheetMusicData.filter((sheetMusic) => {
    const formattedTitle = sheetMusic.musicName ? sheetMusic.musicName.toLowerCase().replace(/\s/g, "") : "";
    const formattedVersion = sheetMusic.version ? sheetMusic.version.toLowerCase().replace(/\s/g, "") : "";
    const formattedTitleSearch = titleSearch.toLowerCase().replace(/\s/g, "");
    const formattedVersionSearch = versionSearch.toLowerCase().replace(/\s/g, "");

    return (
      formattedTitle.includes(formattedTitleSearch) &&
      formattedVersion.includes(formattedVersionSearch) &&
      (keySearch === "" || sheetMusic.key === keySearch)
    );
  });

  return (
    <Wrapper>
      <FunctionWrapper>
        <SearchComponents>
          <SearchBar setSearch={setTitleSearch} placeholder="곡 제목 검색" />
          <SearchBar setSearch={setVersionSearch} placeholder="곡 버전 검색" />
          <KeySelectDropdown setSearch={setKeySearch} />
        </SearchComponents>
        <Info>
          <SelectConti>
            곡을 선택해주세요
            <img src={checkIcon} alt="체크 아이콘" />
          </SelectConti>
          <NumOfConti>
            현재 <BlueText>{selectedRows.length}</BlueText>곡이 담겨 있어요
            <img src={nextBtnIcon} alt="다음버튼 아이콘" 
            onClick={toggleContiStepModal}
            />
            
          </NumOfConti>
        </Info>
      </FunctionWrapper>
      <Contents>
        <SelectContiOrderList sheetMusicData={filteredData} />
        <ContiStepModal/>
      </Contents>
    </Wrapper>
  );
}

export default ContiPageContent;
