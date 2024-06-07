import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DateDropdown from "../../asset/Images/Icons/DateDropdownIcon.svg";
import SelectMonthDropdown from "./SelectMonthDropDown";
import SelectYearDropdown from "./SelectYearDropDown";
import getContiList from "../../apis/getContiList";
import { useNavigate } from "react-router-dom";
import { contiIdState } from "../../atom";
import { useRecoilState } from "recoil";

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
  flex-wrap: wrap;
  margin-left: 40px;
  margin-top: 15px;
  min-width: 1180px;
`;

const Conti = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 23px;
  margin-bottom: 29px;
`;
const SmallBox = styled.div`
  width: 95px;
  height: 18px;
  border-radius: 70px 100px 0px 0px;
  background-color: #ccdfff;
  cursor: pointer;
`;

const Bigbox = styled.div`
  width: 270px;
  height: 184px;
  border-radius: 0px 16px 16px 16px;
  background-color: #ccdfff;
  font-family: "GmarketSansLight";
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default function ContiStorage() {
  const groupId = localStorage.getItem("groupId");
  const [contiId, setContiId] = useRecoilState(contiIdState);
  const navigate = useNavigate();
  const [ContiData, setContiData] = useState([]);

  useEffect(() => {
    const fetchContiList = async () => {
      const fetchedContiList = await getContiList(groupId);
      setContiData(fetchedContiList);
    };
    fetchContiList();
  }, [groupId]);

  const handleClickConti = (index) => {
    setContiId(ContiData[index].setListId);
    navigate("/ContiStoragePage/:content");
  };

  return (
    <>
      <DateContainer>
        <SelectYearDropdown />
        <SelectMonthDropdown />
      </DateContainer>
      <ContiContainer>
        {ContiData.length > 0
          ? ContiData.map((conti, index) => (
              <Conti key={index} onClick={() => handleClickConti(index)}>
                <SmallBox />
                <Bigbox>{conti.setListName}</Bigbox>
              </Conti>
            ))
          : null}
      </ContiContainer>
    </>
  );
}
