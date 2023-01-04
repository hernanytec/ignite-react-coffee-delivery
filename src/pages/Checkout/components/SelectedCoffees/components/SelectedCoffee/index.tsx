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
  counter: number
  onIncrement: () => void
  onDecrement: () => void
  onRemove: () => void
}

export function SelectedCoffee({
  coffee,
  counter,
  onIncrement,
  onDecrement,
  onRemove,
}: SelectedCoffeeProps) {
  return (
    <SelectedCoffeeContainer>
      <img src={coffee.image} alt="" />

      <ActionsContainer>
        <span>{coffee.name}</span>

        <ActionButtons>
          <Counter
            value={counter}
            onDecrement={() => onDecrement()}
            onIncrement={() => onIncrement()}
          />

          <RemoveButtonContainer onClick={onRemove}>
            <Trash className="icon" />
            Remover
          </RemoveButtonContainer>
        </ActionButtons>
      </ActionsContainer>

      <div>
        <span>{formatMoney(coffee.price * counter)}</span>
      </div>
    </SelectedCoffeeContainer>
  )
}
