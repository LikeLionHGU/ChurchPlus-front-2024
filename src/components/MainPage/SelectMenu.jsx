import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-top: none;
  border-bottom: none;
  width: 203px;
  height: 100vh;
  font-size: 24px;
  /* border: 2px solid green; */
`;

const WeekSheet = styled.button`
  font-family: "GmarketSansMedium";
  cursor: pointer;
  width: 182px;
  height: 43px;
  background-color: rgba(204, 223, 255, 0.5);
  border: none;
  border-radius: 10px;
  font-size: 20px;
`;

const Dropdown = styled.div`
  width: 182px;
`;

const DropdownItem = styled.div`
  margin: 28px 0px 28px 0px;

  div {
    cursor: pointer;
    padding-left: 11px;
    padding-top: 7px;
    padding-bottom: 7px;
    font-size: 20px;
    margin-bottom: 14px;
  }

  div:hover {
    background-color: #eeeeee;
    border-radius: 10px;
  }
`;

function SelectMenu() {
  const options = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  return (
    <Wrapper>
      <WeekSheet>이번주 콘티</WeekSheet>
      <Dropdown>
        <DropdownItem>
          {options.map((option) => (
            <Link
              key={option}
              to={`/MonthPage/${option}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div key={option}>{option + "월"}</div>
            </Link>
          ))}
        </DropdownItem>
      </Dropdown>
    </Wrapper>
  );
}

export default SelectMenu;
