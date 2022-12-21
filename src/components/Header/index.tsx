import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import LogoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { HeaderActions, HeaderContainer, Location } from './styles'

export function Header() {
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
          <ShoppingCart weight="fill" size={22} />
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
