import { createGlobalStyle } from 'styled-components'

export const colors = {
  pink: '#E66767',
  white: '#fff',
  cream: '#FFEBD9',
  backgroundColor: '#fff8f1'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    text-decoration: none;
  }

  .container {
    max-width: 1024px;
    width:100%;
    margin: 0 auto;
  }
`
