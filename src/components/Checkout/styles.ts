import styled from 'styled-components'

import { colors } from '../../styles'
import { CartContainer } from '../Cart/styles'

export const CheckoutContainer = styled(CartContainer)`
  display: none;

  &.visible {
    display: flex;
  }
`

export const Checkout = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.cream};

  small {
    color: ${colors.red};
    font-size: 14px;
  }

  &.order-confirm {
    p {
      text-align: left;
      font-size: 14px;
      margin-bottom: 24px;
    }
  }

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  input {
    &.error {
      border-color: ${colors.red};

      &::placeholder {
        color: ${colors.red};
      }
    }

    background-color: ${colors.cream};
    color: ${colors.grey};
    border: 2px solid transparent;
    height: 32px;
    display: block;
    margin: 8px 0;
    width: 100%;
    font-weight: 700;
    padding: 0 8px;

    &[type='number']::-webkit-outer-spin-button,
    &[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &[type='number'] {
      -moz-appearance: textfield;
    }
  }

  .margin-bottom {
    margin-bottom: 24px;
  }

  .display-flex {
    display: flex;
    justify-content: space-between;

    input {
      max-width: 150px;
      width: 100%;
    }
  }
`
