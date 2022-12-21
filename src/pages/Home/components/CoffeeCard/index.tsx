import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/Counter'
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
  coffee: {
    id: string
    name: string
    description: string
    price: number
    tags?: string[]
    image: string
  }
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
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
        <CoffeePrice>{formatMoney(coffee.price)}</CoffeePrice>

        <ActionsContainer>
          <Counter />
          <CartButton>
            <ShoppingCart className="icon" weight="fill" size={22} />
          </CartButton>
        </ActionsContainer>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
