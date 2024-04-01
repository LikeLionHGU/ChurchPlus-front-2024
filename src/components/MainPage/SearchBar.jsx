import React, { useState } from "react";
import styled from "styled-components";
import searchIcons from "../../assets/Icons/search.svg";

const Search = styled.div`
  position: relative;
  margin-right: 20px;

  input {
    padding-left: 25px;
    font-family: "GmarketSansBold";
    width: 298px;
    height: 42px;
    border: none;
    box-shadow: 0px 0px 7px #c0bfbf;
    border-radius: 16px;
    font-size: 20px;
  }

  input:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  position: absolute;

  left: 285px;
  top: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    padding-top: 8px;
    height: 30px;
  }
`;

function SearchBar({ setSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearch(inputValue);
  };

  return (
    <div>
      <Search>
        <input
          type="text"
          name="searchMusicName"
          value={searchInput}
          onChange={handleInputChange}
        />
        <SearchBtn type="submit">
          <img src={searchIcons} alt="검색 아이콘" />
        </SearchBtn>
      </Search>
    </div>
  );
}

export default SearchBar;
