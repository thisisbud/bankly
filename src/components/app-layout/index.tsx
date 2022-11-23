import * as React from 'react'
import AppHeader from '../app-header'

type Props = {
  children: React.ReactNode
}

export default function AppLayout(props: Props): React.ReactElement {
  const { children } = props

  return (
    <React.Fragment>
      <AppHeader/>
      { children }
    </React.Fragment>
  )
}
