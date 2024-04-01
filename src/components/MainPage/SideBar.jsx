import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";
import SelectMenu from "./SelectMenu";

const Wrapper = styled.div`
  width: 203px;
`;

function SideBar() {
  return (
    <Wrapper>
      <UserInfo />
      <SelectMenu />
    </Wrapper>
  );
}

export default SideBar;
