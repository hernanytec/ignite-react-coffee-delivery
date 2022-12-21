import { MapPinLine } from 'phosphor-react'
import { FormHeader } from '../FormHeader'
import { FormContainer, Input } from './styles'

export function UserIdentificationForm() {
  return (
    <FormContainer>
      <FormHeader
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={MapPinLine}
        iconColor="yellow-dark"
      />

      <form>
        <Input placeholder="CEP" />
        <Input className="col-span-3" placeholder="Rua" />
        <Input placeholder="Número" />
        <Input className="col-span-2" placeholder="Complemento" />
        <Input placeholder="Rua" />
        <Input placeholder="Bairro" />
        <Input placeholder="UF" />
      </form>
    </FormContainer>
  )
}
