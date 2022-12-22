import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors['base-title']};
  width: 72px;

  .icon {
    cursor: pointer;
    color: ${(props) => props.theme.colors.purple};
    transition: color 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors['purple-dark']};
    }
  }
`
