import styled from 'styled-components'

import backgroundImage from '../../assets/images/background.png'
import { colors } from '../../styles'

export const HeaderContainer = styled.header`
  text-align: center;
  background-image: url(${backgroundImage});
  padding-top: 64px;
  padding-bottom: 40px;

  h1 {
    color: ${colors.pink};
    max-width: 540px;
    font-size: 36px;
    font-weight: 900;
    margin: 140px auto 0;
    display: block;
  }

  img {
    width: 128px;
  }
`
