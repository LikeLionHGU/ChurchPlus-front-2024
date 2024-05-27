import styled, { css } from "styled-components";

const ButtonBase = css`
  height: 53px;
  width: 114px;

  margin-top: ${(props) => props.$marginTop || "194px"};
  cursor: pointer;
  border: 1px solid rgba(204, 223, 255, 0.8);
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background: transparent;
  z-index: 10;

  img {
    height: 43px;
    position: absolute;
    transform: translate(-50%, -50%);
  }

  &:hover {
    border-color: #aec3de;
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
    background: #aec3de;
    z-index: -12;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &:hover::before {
    opacity: 1;
    width: 116%;
  }
`;

export const NextBtn = styled.button`
  ${ButtonBase}
  float: right;
  margin-right: 8%;
  background-color: rgba(204, 223, 255, 0.8);

  img {
    top: 55%;
    left: 56%;
  }
`;

export const PrevBtn = styled.button`
  ${ButtonBase}
  float: left;
  margin-left: 8.5%;
  background-color: rgba(204, 223, 255, 0.8);

  img {
    top: 55%;
    left: 47%;
  }
`;

export const StartBtn = styled.button`
  ${ButtonBase}
  height: 53px;
  width: 168px;
  float: right;
  margin-right: 8.6%;
  background-color: rgba(204, 223, 255, 0.8);

  img {
    top: 55%;
    left: 47%;
  }
`;
