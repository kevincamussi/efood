import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const RestaurantsListContainer = styled.section`
  background-color: ${colors.backgroundColor};
  padding-top: 80px;
  padding-bottom: 120px;

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    row-gap: 48px;
    column-gap: 80px;
    justify-content: center;

    @media (max-width: ${breakpoints.desktop}) {
      grid-template-columns: 1fr;
      margin: 0 auto;
    }
  }
`
