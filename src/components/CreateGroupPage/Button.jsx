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

export const Btn10 = styled.button`
  height: 53px;
  width: 129px;
  color: rgba(255, 255, 255, 0.9);
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 11px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background: transparent;
  z-index: 10;

  img {
    height: 43px;
    position: absolute;
    top: 55%;
    left: 56%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border-color: rgba(111, 114, 136, 0.5);
  }

  &::before,
  &::after {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    position: absolute;
    transform: skewX(-10deg);
    left: -10%;
    top: 0;
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }

  &::before {
    background: rgba(111, 114, 136, 0.5);
    z-index: -12;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover::before {
    opacity: 1;
    width: 116%;
  }
`;
