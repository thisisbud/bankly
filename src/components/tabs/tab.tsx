import * as React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  children: React.ReactNode,
  value: string
  isActive?: boolean,
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void,
}

const StyledRoot = styled.button<{ $isActive?: boolean }>`
  border-width: 1px;
  border-style: solid;
  font-size: ${({ theme }) => theme.fontSizeDefault};
  padding: 8px 24px;
  line-height: 24px;
  border-radius: 8px;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  ${({ $isActive }) => $isActive
    ? css`
    background-color: ${({ theme }) => theme.colorBackgroundTabPrimaryDefault};
    border-color: ${({ theme }) => theme.colorBorderTabPrimaryDefault};
    color: ${({ theme }) => theme.colorTextTabPrimaryDefault};
  ` : css`
    background-color: ${({ theme }) => theme.colorBackgroundTabSecondaryDefault};
    border-color: ${({ theme }) => theme.colorBorderTabSecondaryDefault};
    color: ${({ theme }) => theme.colorTextTabSecondaryDefault};
  `}

  & + & {
    margin-left: 12px;
  }
`

export default function Tab(props: Props): React.ReactElement {
  const { children, value, onClick, isActive } = props

  return (
    <StyledRoot $isActive={isActive} onClick={onClick} value={value}>{children}</StyledRoot>
  )
}
