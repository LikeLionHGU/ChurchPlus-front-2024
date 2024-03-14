import styled from "styled-components";

export const Text = styled.div`
  padding-left: 8.5%;
  padding-top: 15%;
  font-size: 40px;
  color: white;
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
    font-size: 40px;
    caret-color: blue;

    background-color: #efeff0;

    &:focus {
      background-color: white;
      border: 1px solid black;
    }
  }
`;
