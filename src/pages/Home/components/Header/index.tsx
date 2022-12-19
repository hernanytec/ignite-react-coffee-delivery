import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../../../assets/coffee-delivery-logo.svg'
import { Cart, HeaderActions, HeaderContainer, Location } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="" />

      <HeaderActions>
        <Location>
          <MapPin className="icon" weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </Location>

        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </HeaderActions>
    </HeaderContainer>
  )
}
