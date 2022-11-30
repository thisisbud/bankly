import * as React from 'react'
import styled from 'styled-components'
import Constrictor from '../constrictor'
import Logo from '../logo'

const StyledHeader = styled.header`
  background: ${props => props.theme.backgroundColor};
  color: white;
  border-bottom: 1px solid #1E1E27;

  nav {
    padding: 20px 0;
    border-bottom: 1px solid #1E1E27;
  }
`

export default function AppHeader(): React.ReactElement {

  return (
    <StyledHeader>
      <nav>
        <Constrictor>
          <Logo/>
        </Constrictor>
      </nav>
    </StyledHeader>
  )
}
