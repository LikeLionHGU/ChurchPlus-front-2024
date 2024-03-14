import styled from "styled-components";
import nextBtnHover from "../../assets/images/commonUI/NextButtonHover.svg";

export const Btn = styled.div`
  margin-top: 11%;
  text-align: center;

  img {
    height: 59px;
    cursor: pointer;
  }

  img:hover {
    content: url(${nextBtnHover});
  }
`;
