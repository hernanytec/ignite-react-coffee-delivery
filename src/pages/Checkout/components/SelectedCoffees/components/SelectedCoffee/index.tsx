import { Trash } from 'phosphor-react'
import { Counter } from '../../../../../../components/Counter'
import { CoffeeProps } from '../../../../../../mocks/coffeeList'
import { formatMoney } from '../../../../../../utils/formatters'
import {
  ActionButtons,
  ActionsContainer,
  RemoveButtonContainer,
  SelectedCoffeeContainer,
} from './styles'

interface SelectedCoffeeProps {
  coffee: CoffeeProps
}

export function SelectedCoffee({ coffee }: SelectedCoffeeProps) {
  return (
    <SelectedCoffeeContainer>
      <img src={coffee.image} alt="" />

      <ActionsContainer>
        <span>{coffee.name}</span>

        <ActionButtons>
          <Counter value={1} onDecrement={() => {}} onIncrement={() => {}} />

          <RemoveButtonContainer>
            <Trash className="icon" />
            Remover
          </RemoveButtonContainer>
        </ActionButtons>
      </ActionsContainer>

      <div>
        <span>R$ {formatMoney(coffee.price)}</span>
      </div>
    </SelectedCoffeeContainer>
  )
}
