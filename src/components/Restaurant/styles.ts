import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  position: relative;
  max-width: 480px;
  border: 1px solid ${colors.pink};

  img {
    width: 478px;
    height: 218px;
    margin: 0 auto;
    object-fit: cover;
  }

  color: ${colors.pink};
  background-color: ${colors.white};
`

export const RestaurantTags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const RestaurantInfos = styled.div`
  padding: 8px;

  p {
    margin: 16px 0;
    font-size: 14px;
  }
`

export const RestaurantName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;

  h2,
  p {
    font-weight: 700;
    font-size: 18px;
    margin: 0;
  }

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }

  div {
    display: flex;
  }
`
