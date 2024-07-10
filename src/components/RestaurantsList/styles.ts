import styled from 'styled-components'

import { colors } from '../../styles'

import { Props } from '.'

export const RestaurantsListContainer = styled.section<Props>`
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
  }
`
