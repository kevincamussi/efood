import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#fff',
  cream: '#FFEBD9',
  backgroundColor: '#fff8f1',
  black: '#000',
  grey: '#4B4B4B',
  red: '#ff0000'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '766px'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;

  }

  .errorDiv {
      display:flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      height: 50vh;
      width: 100%;
  }

  body{height: 100%;
  margin: 0;}

  .container {
    max-width: 1024px;
    width:100%;
    margin: 0 auto;



    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }


`
