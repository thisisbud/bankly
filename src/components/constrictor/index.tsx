import * as React from 'react'
import styled from 'styled-components'

type Props = {
  children: React.ReactNode
}

const StyledConstrictor = styled.div`
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
`

export default function Constrictor(props: Props): React.ReactElement {
  const { children } = props

  return (
    <StyledConstrictor>
      {children}
    </StyledConstrictor>
  )
}
