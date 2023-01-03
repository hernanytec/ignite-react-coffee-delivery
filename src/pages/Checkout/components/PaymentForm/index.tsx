import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import {
  paymentOptionsData,
  paymentType,
} from '../../../../mocks/paymentOptionsList'
import { FormHeader } from '../FormHeader'

import {
  PaymentOption,
  PaymentOptionsContainer,
  PaymentOptionsList,
} from './styles'

interface paymentIconProps {
  type: paymentType
}

export function PaymentForm() {
  const { register, watch } = useFormContext()

  const pagamento = watch('pagamento')

  const PaymentTypeIcon = ({ type }: paymentIconProps) => {
    if (type === 'CREDITO') return <CreditCard className="icon" />

    if (type === 'DEBITO') return <Bank className="icon" />

    if (type === 'DINHEIRO') return <Money className="icon" />

    return null
  }

  return (
    <PaymentOptionsContainer>
      <FormHeader
        title="Pagamento"
        subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        icon={CurrencyDollar}
        iconColor="purple"
      />

      <PaymentOptionsList>
        {paymentOptionsData.map((paymentOption) => (
          <PaymentOption
            selected={pagamento === paymentOption.type}
            key={paymentOption.type}
          >
            <input
              value={paymentOption.type}
              type="radio"
              {...register('pagamento')}
            />
            <PaymentTypeIcon type={paymentOption.type} />
            <span>{paymentOption.label}</span>
          </PaymentOption>
        ))}
      </PaymentOptionsList>
    </PaymentOptionsContainer>
  )
}
