/* eslint-disable no-unused-vars */

import { CartItem } from './reducers'

export enum Actions {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  INCREMENT_ITEM_IN_CART = 'INCREMENT_ITEM_IN_CART',
  DECREMENT_ITEM_IN_CART = 'DECREMENT_ITEM_IN_CART',
}

export function addItemToCartAction(cartItem: CartItem) {
  return {
    type: Actions.ADD_ITEM_TO_CART,
    payload: cartItem,
  }
}

export function removeItemFromCartAction(cartItemId: string) {
  return {
    type: Actions.REMOVE_ITEM_FROM_CART,
    payload: cartItemId,
  }
}

export function incrementItemInCartAction(cartItemId: string) {
  return {
    type: Actions.INCREMENT_ITEM_IN_CART,
    payload: cartItemId,
  }
}

export function decrementItemInCartAction(cartItemId: string) {
  return {
    type: Actions.DECREMENT_ITEM_IN_CART,
    payload: cartItemId,
  }
}
