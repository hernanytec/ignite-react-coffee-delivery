import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  gap: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};
  padding-bottom: 32px;
  margin-bottom: 32px;

  img {
    width: 64px;
    height: 64px;
  }

  &:first {
    padding-top: 0;
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: fit-content;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const RemoveButtonContainer = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors['base-button']};
  border: none;
  padding: 6.5px 8px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors['base-text']};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors['base-hover']};
  }

  .icon {
    color: ${(props) => props.theme.colors.purple};
  }
`
