import { createContext, ReactNode, useReducer } from 'react'
import {
  addItemToCartAction,
  decrementItemInCartAction,
  incrementItemInCartAction,
} from '../reducers/orders/actions'
import { CartItem, OrderReducer } from '../reducers/orders/reducers'

interface OrderContextType {
  cartList: CartItem[]
  addItemToCart: (cartItem: CartItem) => void
  decrementItemInCart: (cartItemId: string) => void
  incrementItemInCart: (cartItemId: string) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [state, dispatch] = useReducer(OrderReducer, { cartList: [] })

  const { cartList } = state

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  function incrementItemInCart(cartItemId: string) {
    dispatch(incrementItemInCartAction(cartItemId))
  }

  function decrementItemInCart(cartItemId: string) {
    dispatch(decrementItemInCartAction(cartItemId))
  }

  return (
    <OrderContext.Provider
      value={{
        cartList,
        addItemToCart,
        incrementItemInCart,
        decrementItemInCart,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
