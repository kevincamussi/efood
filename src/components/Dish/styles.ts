import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonLink, ButtonStyle } from '../Button/styles'

export const DishCard = styled.div`
  max-width: 320px;
  padding: 8px;
  background-color: ${colors.pink};
  color: ${colors.cream};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
  height: 440px;

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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
export const ModalContent = styled.div`
  position: relative;
  background-color: ${colors.pink};
  color: ${colors.white};
  padding: 32px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;

  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    right: 8px;
    margin: 0;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &:hover {
      transform: scale(1.2);
      background-color: ${colors.black};
    }
  }

  header {
    display: flex;
    justify-content: space-between;

    > img {
      width: 16px;
      height: 16px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    line-height: 22px;
    margin: 16px 0;
  }

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  ${ButtonLink} {
    display: inline-block;
    background-color: ${colors.cream};
    color: ${colors.pink};
    padding: 4px 8px;
    margin-top: 16px;
    max-width: 218px;

    &:hover {
      box-shadow: 0px 4px 8px ${colors.cream};
    }
  }
`
