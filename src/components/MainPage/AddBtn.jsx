import React from "react";
import AddButton from "../../assets/Icons/AddBtn.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  cursor: pointer;
`;

function AddBtn() {
  return (
    <Wrapper>
      <img src={AddButton} alt="추가버튼" />
    </Wrapper>
  );
}

export default AddBtn;
