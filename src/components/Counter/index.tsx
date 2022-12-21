import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <Minus className="icon" size={14} />
      <span>1</span>
      <Plus className="icon" size={14} />
    </CounterContainer>
  )
}
