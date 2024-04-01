import { createGlobalStyle } from "styled-components";
import GmarketSansTTFBold from "./GmarketSansTTF/GmarketSansTTFBold.ttf";
import GmarketSansTTFLight from "./GmarketSansTTF/GmarketSansTTFLight.ttf";
import GmarketSansTTFMedium from "./GmarketSansTTF/GmarketSansTTFMedium.ttf";

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    font-family: "GmarketSansMedium";
  }

  @font-face {
    font-family: 'GmarketSansBold';
    src: url(${GmarketSansTTFBold}) format('embedded-opentype'),
         url(${GmarketSansTTFBold}) format('woff2'),
         url(${GmarketSansTTFBold}) format('woff'),
         url(${GmarketSansTTFBold}) format("truetype");
    font-display: swap;
} 

@font-face {
    font-family: 'GmarketSansLight';
    src: url(${GmarketSansTTFLight}) format('embedded-opentype'),
         url(${GmarketSansTTFLight}) format('woff2'),
         url(${GmarketSansTTFLight}) format('woff'),
         url(${GmarketSansTTFLight}) format("truetype");
    font-display: swap;
} 

@font-face {
    font-family: 'GmarketSansMedium';
    src: url(${GmarketSansTTFMedium}) format('embedded-opentype'),
         url(${GmarketSansTTFMedium}) format('woff2'),
         url(${GmarketSansTTFMedium}) format('woff'),
         url(${GmarketSansTTFMedium}) format("truetype");
    font-display: swap;
} 
`;

export default GlobalStyle;
