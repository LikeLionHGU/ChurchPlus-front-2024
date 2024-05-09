import React, { useState } from "react";
import styled from "styled-components";
import searchIcons from "../../assets/Icons/search.svg";

const Search = styled.div`
  position: relative;
  margin-right: 20px;

  input {
    padding-left: 25px;
    font-family: "GmarketSansLight";
    width: 234px;
    height: 42px;
    border: 1px solid #9d9d9d;
    /* box-shadow: 0px 0px 7px #c0bfbf; */
    border-radius: 18px;
    font-size: 15px;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    font-family: "GmarketSansLight";
  }
`;

const SearchBtn = styled.button`
  position: absolute;

  left: 220px;
  top: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    padding-top: 7px;
    height: 30px;
  }
`;

function SearchBar({ setSearch, placeholder }) {
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
          placeholder={placeholder}
        />
        <SearchBtn type="submit">
          <img src={searchIcons} alt="검색 아이콘" />
        </SearchBtn>
      </Search>
    </div>
  );
}

export default SearchBar;
