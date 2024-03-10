import { createSlice } from '@reduxjs/toolkit'

interface CartItem {
  id: number
  name: string
  price: number
  amount: number
}

interface CartState {
  total: number
  items: CartItem[]
}

const initialState: CartState = {
  total: 0.0,
  items: [],
}

export const manageUsersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pushItem: (state, action: any) => {
      const item: CartItem = action.payload
      state.items.push(action.payload)
      state.total += item.price
    },
    deleteItem: (state, action: any) => {
      const { id } = action.payload
      const item = state.items.find((item) => item.id == id)

      if (item) {
        state.total -= item.price + item.amount
        state.items.splice(state.items.indexOf(item), 1)
      }
    },
    changeAmount: (state, action: any) => {
      const { id, inc, amount } = action.payload

      const item = state.items.find((item) => item.id == id)
      if (!item) return

      if (inc) {
        item.amount += amount
        state.total += item.price
      } else {
        item.amount -= amount
        state.total -= item.price
      }
    },
  },
})

export const { pushItem } = manageUsersSlice.actions
