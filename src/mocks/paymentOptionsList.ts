export type paymentType = 'CREDITO' | 'DEBITO' | 'DINHEIRO'

interface PaymentOptionDataProps {
  label: string
  type: paymentType
}

export const paymentOptionsData = [
  {
    label: 'Cartão de crédito',
    type: 'CREDITO',
  },
  {
    label: 'Cartão de débito',
    type: 'DEBITO',
  },
  {
    label: 'Dinheiro',
    type: 'DINHEIRO',
  },
] as PaymentOptionDataProps[]
