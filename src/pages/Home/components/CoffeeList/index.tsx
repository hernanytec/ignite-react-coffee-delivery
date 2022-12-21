import { coffeesData } from '../../../../mocks/coffeeList'
import { CoffeeCard } from '../CoffeeCard'
import { CardsContainer, CoffeeListContainer, CoffeeListTitle } from './styles'

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <CoffeeListTitle>Nossos cafés</CoffeeListTitle>

      <CardsContainer>
        {coffeesData.map((coffe) => (
          <CoffeeCard key={coffe.id} coffee={coffe} />
        ))}
      </CardsContainer>
    </CoffeeListContainer>
  )
}
