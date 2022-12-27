import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './styles'

interface CounterProps {
  value: number
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({ value, onIncrement, onDecrement }: CounterProps) {
  return (
    <CounterContainer>
      <Minus className="icon" size={14} onClick={onDecrement} />
      <span>{value}</span>
      <Plus className="icon" size={14} onClick={onIncrement} />
    </CounterContainer>
  )
}
