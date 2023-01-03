import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { UserIdentificationForm } from './components/UserIdentificationForm'
import { CheckoutContainer, Section, SectionTitle } from './styles'

const checkoutFormValidationSchema = z.object({
  cep: z.string().length(8),
  rua: z.string(),
  numero: z.string(),
  complemento: z.string().optional(),
  bairro: z.string(),
  cidadde: z.string(),
  uf: z.string().length(2),
  pagamento: z.enum(['CREDITO', 'DEBITO', 'DINHEIRO']),
})

type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      bairro: '',
      cidadde: '',
      complemento: '',
      numero: '',
      rua: '',
      uf: '',
    },
  })

  const { handleSubmit } = checkoutForm

  function onSubmitCheckout(data: CheckoutFormData) {
    console.log(data)
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
