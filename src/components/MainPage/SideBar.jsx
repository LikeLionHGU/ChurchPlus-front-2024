import React from "react";
import styled from "styled-components";
import SelectMenu from "./SelectMenu";
import Logo from "../../assets/logo/GroomLogo.svg";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 203px;
`;
const GroomLogo = styled.div`
  padding-top: 40px;
  padding-left: 33px;
  cursor: pointer;
  img {
    height: 48px;
    width: 133px;
  }
`;

function SideBar() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/Main");
  };
  return (
    <Wrapper>
      <GroomLogo onClick={handleLogoClick}>
        <img src={Logo} alt="groom 로고" />
      </GroomLogo>
      <SelectMenu />
    </Wrapper>
  );
}

export default SideBar;
