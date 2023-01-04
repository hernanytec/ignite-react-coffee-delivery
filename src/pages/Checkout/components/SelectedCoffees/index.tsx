import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import EmptyCart from '../../../../assets/empty-cart.svg'
import { OrderContext } from '../../../../contexts/OrderContext'
import { formatMoney } from '../../../../utils/formatters'
import { randomNumberGenerator } from '../../../../utils/generators'
import { SelectedCoffee } from './components/SelectedCoffee'
import {
  ConfirmOrderButton,
  EmptyCartContainer,
  PriceInformationContainer,
  PriceItem,
  PriceTotal,
  SelectedCoffeesContainer,
  SelectedProductsListFooter,
} from './styles'

export function SelectedCoffees() {
  const { watch, formState } = useFormContext()

  const {
    cartList,
    incrementItemInCart,
    decrementItemInCart,
    removeItemFromCart,
  } = useContext(OrderContext)

  const totalItemsCost = cartList.reduce(
    (acc, cartItem) => acc + cartItem.coffee.price * cartItem.counter,
    0,
  )

  const cep = watch('cep')
  const deliveryFee = calculateDeliveryFee(cep)

  return (
    <SelectedCoffeesContainer>
      {cartList.length > 0 ? (
        cartList.map(({ coffee, counter }) => (
          <SelectedCoffee
            key={coffee.id}
            coffee={coffee}
            counter={counter}
            onIncrement={() => incrementItemInCart(coffee.id)}
            onDecrement={() => decrementItemInCart(coffee.id)}
            onRemove={() => removeItemFromCart(coffee.id)}
          />
        ))
      ) : (
        <EmptyCartContainer>
          <span>Carrinho vazio</span>

          <img src={EmptyCart} alt="" />

          <NavLink to="/">
            <ConfirmOrderButton>Selecionar cafés</ConfirmOrderButton>
          </NavLink>
        </EmptyCartContainer>
      )}

      {cartList.length > 0 && (
        <SelectedProductsListFooter>
          <PriceInformationContainer>
            <PriceItem>
              <span>Total de itens</span>
              <span>{formatMoney(totalItemsCost)}</span>
            </PriceItem>

            {!!deliveryFee && (
              <PriceItem>
                <span>Entrega</span>
                <span>{formatMoney(deliveryFee)}</span>
              </PriceItem>
            )}

            <PriceTotal>
              <span>Total</span>
              <span>{formatMoney(totalItemsCost + deliveryFee)}</span>
            </PriceTotal>
          </PriceInformationContainer>

          <ConfirmOrderButton type="submit" disabled={!formState.isValid}>
            Confirmar pedido
          </ConfirmOrderButton>
        </SelectedProductsListFooter>
      )}
    </SelectedCoffeesContainer>
  )
}

function calculateDeliveryFee(cep: string) {
  const isValidCep = cep.length === 8
  if (!isValidCep) return 0

  return randomNumberGenerator({ max: 10 })
}
