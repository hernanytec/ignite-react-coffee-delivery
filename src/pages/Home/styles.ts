import styled from 'styled-components'
import { defaultTheme } from '../../styles/theme/default'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 160px;
  max-width: 1440px;
  margin: 0 auto;
  padding-bottom: 157px;
`

export const Intro = styled.div`
  display: flex;
  gap: 56px;
  justify-content: center;
  padding: 92px 0;
`

export const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  width: 588px;
`

export const Title = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily.Header};
  font-weight: 800;
  line-height: 1.3;
  font-size: 48px;
  color: ${(props) => props.theme.colors['base-title']};
  margin-bottom: 16px;
`

export const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export type iconColor = keyof typeof defaultTheme.colors

interface IntroItemProps {
  iconColor: iconColor
}

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 290px 290px;
  margin-top: 66px;
  row-gap: 40px;
  column-gap: 20px;
`

export const IntroItem = styled.div<IntroItemProps>`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors[props.iconColor]};
    padding: 8px;
    border-radius: 50%;
  }
`
