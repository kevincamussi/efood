import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#fff',
  cream: '#FFEBD9',
  backgroundColor: '#fff8f1',
  black: '#000'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;

  }

  body{height: 100%;
  margin: 0;}

  .container {
    max-width: 1024px;
    width:100%;
    margin: 0 auto;
  }

  .loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
  width: 100vw;

  img {
    width: 100px;
  }
  }


`
