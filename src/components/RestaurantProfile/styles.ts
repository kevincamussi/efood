import styled from 'styled-components'

import { HeaderContainer } from '../Header/styles'
import { colors } from '../../styles'

type Props = {
  image: string
}

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

export const BannerImage = styled.div<Props>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  z-index: 1;
`

export const RestaurantName = styled.div`
  position: absolute;
  top: 24px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;

  h3,
  h2 {
    font-size: 32px;
    color: ${colors.white};
  }

  h3 {
    font-weight: 100;
  }

  h2 {
    font-weight: 900;
  }
`
