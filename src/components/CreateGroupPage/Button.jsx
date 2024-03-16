import styled from "styled-components";
import nextBtnHover from "../../assets/images/commonUI/NextButtonHover.svg";
import backBtnHover from "../../assets/images/commonUI/BackButtonHover.svg";
import completeBtnHover from "../../assets/images/commonUI/StartButtonHover.svg";

export const Btn = styled.div`
  margin-top: 194px;
  text-align: center;

  img {
    height: 59px;
    width: 143px;
    cursor: pointer;
    float: right;
    margin-right: 8%;
  }

  img:hover {
    content: url(${nextBtnHover});
  }
`;

export const BackBtn = styled.div`
  margin-top: ${(props) => props.marginTop || "194px"};
  text-align: center;

  img {
    height: 59px;
    width: 143px;
    cursor: pointer;
    float: left;
    margin-left: 8.5%;
  }

  img:hover {
    content: url(${backBtnHover});
  }
`;

export const StartBtn = styled.div`
  margin-top: 0.5rem;
  text-align: center;

  img {
    height: 59px;
    width: 168px;
    cursor: pointer;
    float: right;
    margin-right: 8%;
  }

  img:hover {
    content: url(${completeBtnHover});
  }
`;
