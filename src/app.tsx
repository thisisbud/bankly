import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import AppLayout from './components/app-layout'
import { theme } from './utils/theme'
import Home from './views/home'

export const GlobalAppStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  body {
    font-family: system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    font-size: 1rem;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.colorTextDefault};
    margin: 0;
  }
`

const StyledApp = styled.div`
  margin: 0 auto 24px auto;

  > * + * {
    margin-top: 24px;
  }
`

export default function App (): React.ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalAppStyle/>
        <StyledApp>
          <AppLayout>
            <Home/>
          </AppLayout>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  )
}
