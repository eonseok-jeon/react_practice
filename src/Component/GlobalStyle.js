import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 
  #edede9
  #f5ebe0
  #d6ccc2
  #e3d5ca
  #d5bdaf */
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #d5bdaf;
    width: 50%;
    max-width: 70%;
    margin: 50px auto;
  }
`;

export default GlobalStyle;
