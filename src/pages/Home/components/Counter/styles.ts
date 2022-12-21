import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors['base-button']};
  border-radius: 6px;
  color: ${(props) => props.theme.colors['base-title']};

  .icon {
    color: ${(props) => props.theme.colors.purple};
  }
`
