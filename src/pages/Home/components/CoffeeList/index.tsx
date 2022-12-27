import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { CoffeeProps, coffeesData } from '../../../../mocks/coffeeList'
import { CoffeeCard } from '../CoffeeCard'
import { CardsContainer, CoffeeListContainer, CoffeeListTitle } from './styles'

export function CoffeeList() {
  const { addItemToCart, decrementItemInCart, incrementItemInCart } =
    useContext(OrderContext)

  function handleAddItemToCart(coffee: CoffeeProps, counter: number) {
    const cartItem = {
      coffee,
      counter,
    }

    addItemToCart(cartItem)
  }

  function handleIncrement(coffee: CoffeeProps) {
    incrementItemInCart(coffee.id)
  }

  function handleDecrement(coffee: CoffeeProps) {
    decrementItemInCart(coffee.id)
  }

  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CardsContainer>
        {coffeesData.map((coffe) => (
          <CoffeeCard
            key={coffe.id}
            coffee={coffe}
            onAddToCart={handleAddItemToCart}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </CardsContainer>
    </CoffeeListContainer>
  )
}
