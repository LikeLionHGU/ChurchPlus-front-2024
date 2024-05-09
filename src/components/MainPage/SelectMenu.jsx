import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MainPageIcon from "../../asset/Images/Icons/MainPageIcon.svg";
import ContiCreateIcon from "../../asset/Images/Icons/ContiCreate.svg";
import ContiStorageIcon from "../../asset/Images/Icons/ContiStorage.svg";
import ManageGroup from "../../asset/Images/Icons/ManageGroup.svg";
import TeamDropdownIcon from "../../asset/Images/Icons/TeamDropdownIcon.svg";

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

const TeamDropdown = styled.div`
  font-family: "GmarketSansMedium";
  cursor: pointer;
  width: 182px;
  height: 43px;
  /* background-color: rgba(204, 223, 255, 0.5); */
  /* border: none; */
  /* border-radius: 10px; */
  font-size: 19px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  /* justify-content: center; */
  margin-top: 30px;
  margin-bottom: 11px;
  margin-right: 10px;
`;

const Dropdown = styled.div`
  width: 182px;
`;

const Items = styled.div`
  font-family: "GmarketSansMidium";
  /* margin-top: 5px; */
  cursor: pointer;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 18px;
  color: #3e5692;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #eeeeee;
    border-radius: 10px;
    font-weight: 700;
  }
  img {
    padding-right: 10px;
  }
  span {
    margin-top: 3px;
  }
`;

// const DropdownItem = styled.div`
//   margin: 28px 0px 28px 0px;

//   div {
//     cursor: pointer;
//     padding-left: 11px;
//     padding-top: 7px;
//     padding-bottom: 7px;
//     font-size: 20px;
//     margin-bottom: 14px;
//   }

//   div:hover {
//     background-color: #eeeeee;
//     border-radius: 10px;
//   }
// `;

function SelectMenu() {
  //   const options = [
  //     "1",
  //     "2",
  //     "3",
  //     "4",
  //     "5",
  //     "6",
  //     "7",
  //     "8",
  //     "9",
  //     "10",
  //     "11",
  //     "12",
  //   ];

  return (
    <Wrapper>
      <TeamDropdown>
        글로리아 팀
        <img src={TeamDropdownIcon} alt="" />
      </TeamDropdown>
      <Dropdown>
        <Items>
          <img src={MainPageIcon} alt="" />
          <span>메인 페이지</span>
        </Items>
        <Items>
          <img src={ContiCreateIcon} alt="" />
          <span>콘티 생성하기</span>
        </Items>
        <Items>
          <img src={ContiStorageIcon} alt="" />
          <span>콘티 보관하기</span>
        </Items>
        <Items>
          <img src={ManageGroup} alt="" />
          <span>팀 관리</span>
        </Items>
        {/* <DropdownItem>
          {options.map((option) => (
            <Link
              key={option}
              to={`/MonthPage/${option}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div key={option}>{option + "월"}</div>
            </Link>
          ))}
        </DropdownItem> */}
      </Dropdown>
    </Wrapper>
  );
}

export default SelectMenu;
