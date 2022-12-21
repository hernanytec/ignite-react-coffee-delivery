import { iconColor } from '../../../Home/styles'
import { FormHeaderContainer, FormHeaderText, IconContainer } from './styles'

interface HeaderProps {
  title: string
  subtitle: string
  icon: any
  iconColor: iconColor
}

export function FormHeader(props: HeaderProps) {
  return (
    <FormHeaderContainer>
      <IconContainer iconColor={props.iconColor}>
        <props.icon className="icon" size={22} />
      </IconContainer>

      <FormHeaderText>
        <h2>{props.title}</h2>
        <span>{props.subtitle}</span>
      </FormHeaderText>
    </FormHeaderContainer>
  )
}
