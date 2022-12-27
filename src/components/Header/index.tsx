import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LogoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  HeaderActions,
  HeaderContainer,
  Location,
  ShoppingCartIconContainer,
} from './styles'

export function Header() {
  const { cartList } = useContext(OrderContext)

  const cartItemsCounter = cartList.reduce(
    (acc, value) => acc + value.counter,
    0,
  )

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={LogoCoffeeDelivery} alt="" />
      </NavLink>

      <HeaderActions>
        <Location>
          <MapPin className="icon" weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </Location>

        <NavLink to="/checkout">
          <ShoppingCartIconContainer counter={cartItemsCounter}>
            <ShoppingCart weight="fill" size={22} />
          </ShoppingCartIconContainer>
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
