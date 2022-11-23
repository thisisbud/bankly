import * as React from 'react'
import styled from 'styled-components'
import Constrictor from '../constrictor'

const StyledHeader = styled.header`
  background: ${props => props.theme.backgroundColor};
  color: white;

  nav {
    padding: 20px 0;
    border-bottom: 1px solid #424242;
  }
  aside {
    padding: 60px 0;

    h1 {
      font-size: ${props => props.theme.fontSizeLarge};
      margin:0;
    }
  }
`

export default function AppHeader(): React.ReactElement {

  return (
    <StyledHeader>
      <nav>
        <Constrictor>
          Logo
        </Constrictor>
      </nav>
      <Constrictor>
        <aside>
          <h1>Welcome back!</h1>
        </aside>
      </Constrictor>
    </StyledHeader>
  )
}
