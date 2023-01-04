import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Delivery from '../../assets/delivery.svg'
import { OrderContext } from '../../contexts/OrderContext'
import {
  DetailsSection,
  IconWrapper,
  OrderInfoCard,
  OrderInfoContainer,
  OrderInfoDetails,
  OrderInfoItem,
  SuccessContainer,
} from './styles'

const paymentOptions = {
  CREDITO: 'Cartão de Crédito',
  DEBITO: 'Cartão de Débito',
  DINHEIRO: 'Dinheiro',
}

export function Success() {
  const { checkoutInfo, resetOrderContext } = useContext(OrderContext)
  const navigate = useNavigate()

  const paymentMethod =
    paymentOptions[checkoutInfo?.pagamento!] || 'Não informado'

  const shouldResetContext = useRef(false)

  useEffect(() => {
    if (!checkoutInfo) navigate('/')

    return () => {
      if (shouldResetContext.current) {
        resetOrderContext()
      } else {
        shouldResetContext.current = true
      }
    }
  }, [checkoutInfo, navigate, resetOrderContext])

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
                  <span className="bold">
                    {' '}
                    {checkoutInfo?.rua}, {checkoutInfo?.numero}
                  </span>
                </span>
                <span>
                  {checkoutInfo?.bairro} - {checkoutInfo?.cidade},{' '}
                  {checkoutInfo?.uf}
                </span>
              </OrderInfoDetails>
            </OrderInfoItem>

            <OrderInfoItem>
              <IconWrapper background="yellow">
                <Timer weight="fill" />
              </IconWrapper>

              <OrderInfoDetails>
                <span>Previsão de entrega</span>
                <span className="bold">20 - 30 min</span>
              </OrderInfoDetails>
            </OrderInfoItem>

            <OrderInfoItem>
              <IconWrapper background="yellow">
                <CurrencyDollar />
              </IconWrapper>

              <OrderInfoDetails>
                <span>Pagamento na entrega</span>
                <span className="bold">{paymentMethod}</span>
              </OrderInfoDetails>
            </OrderInfoItem>
          </OrderInfoCard>
        </DetailsSection>

        <img src={Delivery} alt="" />
      </OrderInfoContainer>
    </SuccessContainer>
  )
}
