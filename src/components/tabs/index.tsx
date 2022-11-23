import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode[],
  activeTab: string,
  onChange(e: React.MouseEvent<HTMLButtonElement>): void
}

const StyledTabs = styled.nav`
  padding: 10px 0;
`

export default function Tabs(props: Props): React.ReactElement {
  const { children, onChange, activeTab } = props

  function renderChild(child: React.ReactNode) {
    if (typeof child === 'undefined' || !child) {
      return
    }
    return React.cloneElement(child as React.ReactElement, {
      onClick: onChange,
      isActive: (child as React.ReactElement).props.value === activeTab,
    })
  }

  return (
    <StyledTabs>
      {React.Children.map(children, renderChild)}
    </StyledTabs>
  )
}
