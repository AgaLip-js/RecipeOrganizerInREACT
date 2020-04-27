import { createGlobalStyle } from "styled-components";
import Poppins from "../assets/fonts/Poppins-Regular.ttf";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }


}
*, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*:focus {
  outline: none;
}
body{
box-sizing: border-box;
  background: white;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
  font-weight: 400;

`;

export default GlobalStyle;
