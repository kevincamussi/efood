import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import Cardapio from '../../Interfaces/dishes'

export type CartState = {
  items: Cardapio[]
  isOpen: boolean
  isCheckoutPageOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isCheckoutPageOpen: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapio>) => {
      const dish = state.items.find((item) => item.id === action.payload.id)
      if (!dish) {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    openCheckout: (state) => {
      state.isCheckoutPageOpen = true
    },
    closeCheckout: (state) => {
      state.isCheckoutPageOpen = false
    },
    resetState: () => {
      return initialState
    }
  }
})

export const {
  add,
  open,
  close,
  remove,
  openCheckout,
  closeCheckout,
  resetState
} = cartSlice.actions

export default cartSlice.reducer
