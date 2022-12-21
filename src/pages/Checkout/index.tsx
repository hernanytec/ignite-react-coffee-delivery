import { PaymentForm } from './components/PaymentForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { UserIdentificationForm } from './components/UserIdentificationForm'
import { CheckoutContainer, Section, SectionTitle } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <Section>
        <SectionTitle>Complete seu pedido</SectionTitle>

        <UserIdentificationForm />
        <PaymentForm />
      </Section>

      <Section>
        <SectionTitle>Cafés selecionados</SectionTitle>

        <SelectedCoffees />
      </Section>
    </CheckoutContainer>
  )
}
