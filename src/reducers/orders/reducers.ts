import produce from 'immer'
import { CoffeeProps } from '../../mocks/coffeeList'
import { Actions } from './actions'

export interface CartItem {
  coffee: CoffeeProps
  counter: number
}

export interface OrderState {
  cartList: CartItem[]
}

export function OrderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case Actions.ADD_ITEM_TO_CART: {
      const cartItem = state.cartList.find(
        (cartItem) => cartItem.coffee.id === action.payload.coffee.id,
      )

      if (cartItem || action.payload.counter === 0) return state

      return produce(state, (draft) => {
        draft.cartList.push(action.payload)
      })
    }
    case Actions.INCREMENT_ITEM_IN_CART: {
      const index = state.cartList.findIndex(
        (item) => item.coffee.id === action.payload,
      )

      if (index === -1) return state

      return produce(state, (draft) => {
        draft.cartList[index].counter += 1
      })
    }
    case Actions.DECREMENT_ITEM_IN_CART: {
      const index = state.cartList.findIndex(
        (item) => item.coffee.id === action.payload,
      )

      if (index === -1) return state

      return produce(state, (draft) => {
        draft.cartList[index].counter -= 1

        if (draft.cartList[index].counter <= 0) {
          draft.cartList.splice(index, 1)
        }
      })
    }
    default:
      return state
  }
}
