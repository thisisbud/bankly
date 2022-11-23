import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import AppLayout from './components/app-layout'
import { theme } from './utils/theme'
import Account from './views/account'

export const GlobalAppStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 1rem;
    background-color: white;
    color: black;
    margin: 0;
  }
`

const StyledApp = styled.div`
  margin: 0 auto;

  > * + * {
    margin-top: 20px;
  }
`

export default function App (): React.ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalAppStyle/>
        <StyledApp>
          <AppLayout>
            <Account/>
          </AppLayout>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  )
}
