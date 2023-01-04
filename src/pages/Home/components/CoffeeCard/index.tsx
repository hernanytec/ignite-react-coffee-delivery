import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Counter } from '../../../../components/Counter'
import { CoffeeProps } from '../../../../mocks/coffeeList'
import { formatMoney } from '../../../../utils/formatters'

import {
  ActionsContainer,
  CardFooter,
  CartButton,
  CoffeeCardContainer,
  CoffeePrice,
  DescriptionContainer,
  Tag,
  TagsContainer,
} from './styles'

interface CoffeeCardProps {
  coffee: CoffeeProps
  selected?: boolean
  onAddToCart: (coffee: CoffeeProps, counter: number) => void
  onIncrement: (coffee: CoffeeProps) => void
  onDecrement: (coffee: CoffeeProps) => void
}

export function CoffeeCard({
  coffee,
  selected = false,
  onAddToCart,
  onIncrement,
  onDecrement,
}: CoffeeCardProps) {
  const [counterValue, setCounterValue] = useState(1)

  function handleIncrement() {
    setCounterValue((state) => state + 1)
    onIncrement(coffee)
  }

  function handleDecrement() {
    setCounterValue((state) => Math.max(0, state - 1))
    onDecrement(coffee)
  }

  return (
    <CoffeeCardContainer selected={selected}>
      <img className="cup-coffee" src={coffee.image} alt="" />

      <TagsContainer>
        {coffee.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>

      <DescriptionContainer>
        <strong>{coffee.name}</strong>
        <span>{coffee.description}</span>
      </DescriptionContainer>

      <CardFooter>
        <CoffeePrice>{formatMoney(coffee.price, '')}</CoffeePrice>

        <ActionsContainer>
          <Counter
            value={counterValue}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <CartButton onClick={() => onAddToCart(coffee, counterValue)}>
            <ShoppingCart className="icon" weight="fill" size={22} />
          </CartButton>
        </ActionsContainer>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
