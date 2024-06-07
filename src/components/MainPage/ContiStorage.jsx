import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SelectMonthDropdown from "./SelectMonthDropDown";
import SelectYearDropdown from "./SelectYearDropDown";
import getContiList from "../../apis/getContiList";
import { useNavigate } from "react-router-dom";

const DateContainer = styled.div`
  font-family: "GmarketSansLight";
  font-size: 20px;
  margin-top: 5px;
  margin-left: 36px;
  display: flex;
`;

const ContiContainer = styled.div`
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
  const navigate = useNavigate();
  const [ContiData, setContiData] = useState([]);
  const [monthSearch, setMonthSearch] = useState("06");
  const [yearSearch, setYearSearch] = useState("2024");

  const filteredData = ContiData.filter((conti) => {
    return (
      monthSearch === conti.month && yearSearch === conti.year
    );
  });

  useEffect(() => {
    const fetchContiList = async () => {
      const fetchedContiList = await getContiList(groupId);
      setContiData(fetchedContiList);
    };
    fetchContiList();
  }, [groupId]);

  const handleClickConti = (index) => {
    localStorage.setItem("setListId", ContiData[index].setListId);
    localStorage.setItem("setListName", ContiData[index].setListName);
    navigate("/ContiStoragePage/:content");
  };

  console.log("ContiData", ContiData);
  console.log("monthSearch", monthSearch);
  console.log("yearSearch", yearSearch);
  if (ContiData.length > 0) {
    console.log("ContiData[0].month", ContiData[0].month);
  }

  return (
    <>
      <DateContainer>
        <SelectYearDropdown setSearch={setYearSearch} />
        <SelectMonthDropdown setSearch={setMonthSearch} />
      </DateContainer>
      <ContiContainer>
        {ContiData.length > 0 && filteredData.length > 0
          ? filteredData.map((conti, index) => (
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
