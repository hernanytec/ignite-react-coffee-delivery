import { NavLink } from 'react-router-dom'
import { coffeesData } from '../../../../mocks/coffeeList'
import { SelectedCoffee } from './components/SelectedCoffee'
import {
  ConfirmOrderButton,
  PriceInformationContainer,
  PriceItem,
  PriceTotal,
  SelectedCoffeesContainer,
  SelectedProductsListFooter,
} from './styles'
export function SelectedCoffees() {
  const coffees = coffeesData.slice(0, 2)

  return (
    <SelectedCoffeesContainer>
      {coffees.map((coffee) => (
        <SelectedCoffee key={coffee.id} coffee={coffee} />
      ))}

      <SelectedProductsListFooter>
        <PriceInformationContainer>
          <PriceItem>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </PriceItem>

          <PriceItem>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </PriceItem>

          <PriceTotal>
            <span>Total</span>
            <span>R$ 33,20</span>
          </PriceTotal>
        </PriceInformationContainer>

        <NavLink to="/success">
          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </NavLink>
      </SelectedProductsListFooter>
    </SelectedCoffeesContainer>
  )
}
