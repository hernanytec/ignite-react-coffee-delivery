import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as z from 'zod'
import { OrderContext } from '../../contexts/OrderContext'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { UserIdentificationForm } from './components/UserIdentificationForm'
import { CheckoutContainer, Section, SectionTitle } from './styles'

const checkoutFormValidationSchema = z.object({
  cep: z.string().length(8),
  rua: z.string().min(1),
  numero: z.string().min(1),
  complemento: z.string().optional(),
  bairro: z.string().min(1),
  cidade: z.string().min(1),
  uf: z.string().length(2),
  pagamento: z.enum(['CREDITO', 'DEBITO', 'DINHEIRO']),
})

export type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const { setCheckoutInfo, checkoutInfo } = useContext(OrderContext)
  const navigate = useNavigate()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      bairro: '',
      cidade: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
      ...checkoutInfo,
    },
  })

  const { handleSubmit } = checkoutForm

  function onSubmitCheckout(data: CheckoutFormData) {
    setCheckoutInfo(data)
    navigate('/success')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmitCheckout)}>
        <Section>
          <SectionTitle>Complete seu pedido</SectionTitle>

          <FormProvider {...checkoutForm}>
            <UserIdentificationForm />
            <PaymentForm />
          </FormProvider>
        </Section>

        <Section>
          <SectionTitle>Cafés selecionados</SectionTitle>

          <FormProvider {...checkoutForm}>
            <SelectedCoffees />
          </FormProvider>
        </Section>
      </form>
    </CheckoutContainer>
  )
}
