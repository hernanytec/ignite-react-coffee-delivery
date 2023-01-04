import { createContext, ReactNode, useReducer } from 'react'
import { CheckoutFormData } from '../pages/Checkout'
import {
  addItemToCartAction,
  decrementItemInCartAction,
  incrementItemInCartAction,
  removeItemFromCartAction,
  setCheckoutInfoAction,
} from '../reducers/orders/actions'
import { CartItem, OrderReducer } from '../reducers/orders/reducers'

interface OrderContextType {
  cartList: CartItem[]
  checkoutInfo?: CheckoutFormData
  addItemToCart: (cartItem: CartItem) => void
  decrementItemInCart: (cartItemId: string) => void
  incrementItemInCart: (cartItemId: string) => void
  removeItemFromCart: (cartItemId: string) => void
  setCheckoutInfo: (info: CheckoutFormData) => void
}

export const OrderContext = createContext({} as OrderContextType)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [state, dispatch] = useReducer(OrderReducer, { cartList: [] })

  const { cartList, checkoutInfo } = state

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  function incrementItemInCart(cartItemId: string) {
    dispatch(incrementItemInCartAction(cartItemId))
  }

  function decrementItemInCart(cartItemId: string) {
    dispatch(decrementItemInCartAction(cartItemId))
  }

  function removeItemFromCart(cartItemId: string) {
    dispatch(removeItemFromCartAction(cartItemId))
  }

  function setCheckoutInfo(info: CheckoutFormData) {
    dispatch(setCheckoutInfoAction(info))
  }

  return (
    <OrderContext.Provider
      value={{
        cartList,
        checkoutInfo,
        addItemToCart,
        incrementItemInCart,
        decrementItemInCart,
        removeItemFromCart,
        setCheckoutInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
