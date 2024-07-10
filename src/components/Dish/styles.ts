import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonStyle } from '../Button/styles'

export const DishCard = styled.div`
  max-width: 320px;
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.cream};
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 168px;
    object-fit: cover;
  }

  h2 {
    font-size: 16px;
    font-weight: 900;
    padding-top: 8px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    padding: 8px 0;
  }

  ${ButtonStyle} {
    background-color: ${colors.cream};
    color: ${colors.pink};
    width: 100%;
    margin-top: auto;

    &:hover {
      box-shadow: 0px 4px 8px ${colors.cream};
    }
  }
`
