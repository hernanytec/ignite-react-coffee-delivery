import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import Delivery from '../../assets/delivery.svg'
import {
  DetailsSection,
  IconWrapper,
  OrderInfoCard,
  OrderInfoContainer,
  OrderInfoDetails,
  OrderInfoItem,
  SuccessContainer,
} from './styles'

export function Success() {
  return (
    <SuccessContainer>
      <OrderInfoContainer>
        <DetailsSection>
          <h1>Uhu! Pedido confirmado</h1>
          <h2>Agora é só aguardar que logo o café chegará até você</h2>

          <OrderInfoCard>
            <OrderInfoItem>
              <IconWrapper background="purple">
                <MapPin weight="fill" />
              </IconWrapper>

              <OrderInfoDetails>
                <span>
                  Entrega em
                  <span className="bold"> Rua João Daniel Martinelli, 102</span>
                </span>
                <span> Farrapos - Porto Alegre, RS</span>
              </OrderInfoDetails>
            </OrderInfoItem>

            <OrderInfoItem>
              <IconWrapper background="yellow">
                <Timer weight="fill" />
              </IconWrapper>

              <OrderInfoDetails>
                <span>
                  Entrega em
                  <span className="bold"> Rua João Daniel Martinelli, 102</span>
                </span>
                <span className="bold">20 - 30 min</span>
              </OrderInfoDetails>
            </OrderInfoItem>

            <OrderInfoItem>
              <IconWrapper background="yellow">
                <CurrencyDollar />
              </IconWrapper>

              <OrderInfoDetails>
                <span>Pagamento na entrega</span>
                <span className="bold">Cartão de Crédito</span>
              </OrderInfoDetails>
            </OrderInfoItem>
          </OrderInfoCard>
        </DetailsSection>

        <img src={Delivery} alt="" />
      </OrderInfoContainer>
    </SuccessContainer>
  )
}
