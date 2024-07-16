import styled from 'styled-components'

import { colors } from '../../styles'

type Props = {
  image: string | undefined
}

export const BannerImage = styled.div<Props>`
  width: 100%;
  height: 280px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
  }
`

export const RestaurantName = styled.div`
  position: absolute;
  top: 24px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;

  h3,
  h2 {
    font-size: 32px;
    color: ${colors.white};
  }

  h2 {
    font-weight: 100;
  }

  h3 {
    font-weight: 900;
  }
`
