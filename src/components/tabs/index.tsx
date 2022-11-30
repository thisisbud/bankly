import * as React from 'react'

type Props = {
  children: React.ReactNode[],
  activeTab: string,
  onChange(e: React.MouseEvent<HTMLButtonElement>): void
}

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
    <nav>
      {React.Children.map(children, renderChild)}
    </nav>
  )
}
