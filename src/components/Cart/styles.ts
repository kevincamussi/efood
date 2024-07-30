import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonStyle } from '../Button/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.8;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.visible {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.pink};
  max-width: 360px;
  width: 100%;
  padding: 48px 8px 0 8px;
  z-index: 1;

  p {
    color: ${colors.cream};
    text-align: center;
  }

  > img {
    position: absolute;
    top: 16px;
    right: 8px;
    cursor: pointer;
  }

  ${ButtonStyle} {
    background-color: ${colors.cream};
    color: ${colors.pink};
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: 8px;
  }
`

export const CartItem = styled.div`
  background-color: ${colors.cream};
  color: ${colors.pink};
  padding: 8px;
  display: flex;
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  img:nth-of-type(2) {
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 8px;
    right: 0;
    cursor: pointer;
  }

  h3 {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: 900;
  }

  span {
    font-size: 14px;
  }
`

export const Prices = styled.p`
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 24px;
`
