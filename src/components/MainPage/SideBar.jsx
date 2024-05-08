import React from "react";
import UserInfo from "./UserInfo";
import styled from "styled-components";
import SelectMenu from "./SelectMenu";
import Logo from "../../assets/logo/GroomLogo.svg";

const Wrapper = styled.div`
  width: 203px;
`;
const GroomLogo = styled.div`
  padding-top: 18px;
  padding-left: 33px;
  cursor: pointer;
  img {
    height: 45px;
    width: 133px;
  }
`;

function SideBar() {
  return (
    <Wrapper>
      {/* <UserInfo /> */}
      <GroomLogo>
        <img src={Logo} alt="groom 로고" />
      </GroomLogo>
      <SelectMenu />
    </Wrapper>
  );
}

export default SideBar;
