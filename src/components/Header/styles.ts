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

export const RestaurantProfileHeader = styled(HeaderContainer)`
  padding: 64px 0;

  a,
  p {
    color: ${colors.pink};
    font-size: 18px;
    font-weight: 900;
  }

  a {
    &:hover {
      text-shadow: 0px 4px 8px ${colors.pink};
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
