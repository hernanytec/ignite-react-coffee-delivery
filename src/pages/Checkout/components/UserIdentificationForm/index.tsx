import { MapPinLine } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { FormHeader } from '../FormHeader'
import { FieldsContainer, FormContainer, Input } from './styles'

export function UserIdentificationForm() {
  const { register } = useFormContext()

  return (
    <FormContainer>
      <FormHeader
        title="Endereço de Entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={MapPinLine}
        iconColor="yellow-dark"
      />

      <FieldsContainer>
        <Input placeholder="CEP" {...register('cep')} />
        <Input
          className="col-span-3"
          placeholder="Rua"
          required
          {...register('rua')}
        />
        <Input placeholder="Número" {...register('numero')} />
        <Input
          className="col-span-2"
          placeholder="Complemento"
          {...register('complemento')}
        />
        <Input placeholder="Bairro" {...register('bairro')} />
        <Input placeholder="Cidade" {...register('cidade')} />
        <Input placeholder="UF" {...register('uf')} />
      </FieldsContainer>
    </FormContainer>
  )
}
