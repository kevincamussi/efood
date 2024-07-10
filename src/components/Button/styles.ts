import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonStyle = styled.button`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  background-color: ${colors.pink};
  color: ${colors.cream};

  &:hover {
    cursor: pointer;
  }
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  background-color: ${colors.pink};
  color: ${colors.cream};

  &:hover {
    box-shadow: 0px 4px 8px ${colors.pink};
    cursor: pointer;
  }
`
