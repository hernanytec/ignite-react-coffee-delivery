import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import HomeCupCoffee from '../../assets/home-cup-coffee.svg'
import { Header } from './components/Header'
import {
  HomeContainer,
  iconColor,
  Intro,
  IntroItem,
  IntroText,
  ItemsContainer,
  Subtitle,
  Title,
} from './styles'

interface IntroItemType {
  label: string
  icon: any
  iconBackgroundColor: iconColor
}

export function Home() {
  const items = [
    {
      label: 'Compra simples e segura',
      icon: ShoppingCart,
      iconBackgroundColor: 'yellow-dark',
    },
    {
      label: 'Embalagem mantém o café intacto',
      icon: Package,
      iconBackgroundColor: 'base-text',
    },
    {
      label: 'Entrega rápida e rastreada',
      icon: Timer,
      iconBackgroundColor: 'yellow',
    },
    {
      label: 'O café chega fresquinho até você',
      icon: Coffee,
      iconBackgroundColor: 'purple',
    },
  ] as IntroItemType[]

  return (
    <>
      <Header />
      <HomeContainer>
        <Intro>
          <IntroText>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>

            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>

            <ItemsContainer>
              {items.map((item) => (
                <IntroItem
                  iconColor={item.iconBackgroundColor}
                  key={item.label}
                >
                  <item.icon className="icon" weight="fill" size={32} />
                  <span>{item.label}</span>
                </IntroItem>
              ))}
            </ItemsContainer>
          </IntroText>

          <img src={HomeCupCoffee} alt="Um copo grande de café" />
        </Intro>
      </HomeContainer>
    </>
  )
}
