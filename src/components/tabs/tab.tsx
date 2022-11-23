import * as React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode,
  value: string
  isActive?: boolean,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}

const StyledButton = styled.button<{ $isActive?: boolean }>`
  background-color: white;
  border-width: 0;
  border-bottom-width: 3px;
  border-color: transparent;
  font-size: ${props => props.theme.fontSizeDefault};
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  ${({ $isActive }) => $isActive
    ? css`
    border-bottom-color: black;
  ` : ''}

  & + & {
    margin-left: 20px;
  }
`

export default function Tab(props: Props): React.ReactElement {
  const { children, value, onClick, isActive } = props

  return (
    <StyledButton $isActive={isActive} onClick={onClick} value={value}>{children}</StyledButton>
  )
}
