import styled from "styled-components";

export const Text = styled.div`
  padding-left: 8.5%;
  padding-top: 183px;
  font-size: 40px;
  color: black;
`;

export const BlueText = styled.span`
  color: #325692;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: center;

  input {
    margin-top: 3rem;
    padding-left: 2.4rem;
    height: 100px;
    width: 81%;
    border-radius: 24px;
    border: none;
    outline: none;
    font-family: "GmarketSansLight";
    font-size: 40px;
    caret-color: blue;

    background-color: #efeff0;

    &:focus {
      background-color: white;
      border: 1px solid black;
    }
  }
`;

export const TextBoxVer2 = styled.div`
  display: flex;

  input {
    margin-top: 32px;
    padding-left: 2.4rem;
    height: 70px;
    width: 682px;
    border-radius: 16px;
    border: none;
    outline: none;
    font-family: "GmarketSansLight";
    font-size: 40px;
    caret-color: blue;

    background-color: #efeff0;

    &:focus {
      background-color: white;
      border: 1px solid black;
    }
  }
`;

export const AskGroup = styled.img`
  margin-top: 209px;
  height: 24px;
  float: left;
  padding-left: 8.5%;
  cursor: pointer;
`;
