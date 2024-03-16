import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg width='1440' height='810' viewBox='0 0 1440 810' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1410_2222)'%3E%3Crect width='1440' height='810' fill='%2300051D'/%3E%3Cg filter='url(%23filter0_f_1410_2222)'%3E%3Cpath d='M1664 667C1664 887.914 1484.91 1067 1264 1067C1043.09 1067 864 887.914 864 667C864 446.086 1043.09 267 1264 267C1484.91 267 1664 446.086 1664 667Z' fill='%23000054' fill-opacity='0.5'/%3E%3C/g%3E%3Cg filter='url(%23filter1_f_1410_2222)'%3E%3Cpath d='M712 686C712 947.231 476.278 1159 185.5 1159C-105.278 1159 -341 947.231 -341 686C-341 424.769 -105.278 213 185.5 213C476.278 213 712 424.769 712 686Z' fill='%234F0923' fill-opacity='0.5'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_f_1410_2222' x='464' y='-133' width='1600' height='1600' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='200' result='effect1_foregroundBlur_1410_2222'/%3E%3C/filter%3E%3Cfilter id='filter1_f_1410_2222' x='-741' y='-187' width='1853' height='1746' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/%3E%3CfeGaussianBlur stdDeviation='200' result='effect1_foregroundBlur_1410_2222'/%3E%3C/filter%3E%3CclipPath id='clip0_1410_2222'%3E%3Crect width='1440' height='810' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");

  margin: 0;
  padding: 0;
  overflow: hidden;

  width: 100vw;
  height: 100vh;
  background-size: 400%;

  animation: bgAnimation 5s ease-in-out infinite;

  @keyframes bgAnimation {
    0% {
      background-size: 100%;
    }
    50% {
      background-size: 200%;
    }
    100% {
      background-size: 100%;
    }
  }
`;
