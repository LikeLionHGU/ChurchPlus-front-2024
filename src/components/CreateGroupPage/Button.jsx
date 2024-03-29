import styled, { css } from "styled-components";

const ButtonBase = css`
  height: 53px;
  width: 129px;

  margin-top: ${(props) => props.$marginTop || "194px"};
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 11px;
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

export const NextBtn = styled.button`
  ${ButtonBase}
  float: right;
  margin-right: 8%;

  img {
    top: 55%;
    left: 56%;
  }
`;

export const PrevBtn = styled.button`
  ${ButtonBase}
  float: left;
  margin-left: 8.5%;

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

  img {
    height: 40px;
    top: 54%;
    left: 51%;
  }

  &:hover {
    border-color: #734cde;
  }

  &::before {
    background: #734cde;
    z-index: -12;
    opacity: 1;
    transition: all 0.6s cubic-bezier(0.77, 0, 0.175, 1);
  }

  &::after {
    content: "";
    width: 0%;
    height: 100%;
    display: block;
    background: #80ffd3;
    position: absolute;
    -ms-transform: skewX(-20deg);
    -webkit-transform: skewX(-20deg);
    transform: skewX(-20deg);
    left: -10%;
    opacity: 0;
    top: 0;
    z-index: -15;
    -webkit-transition: all 0.94s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    -moz-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    -o-transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    transition: all 0.4s cubic-bezier(0.2, 0.95, 0.57, 0.99);
    box-shadow: 2px 0px 14px rgba(0, 0, 0, 0.6);
  }

  &:hover::after {
    opacity: 1;
    width: 120%;
  }
`;
