import * as React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
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
  max-width: 1000px;
  padding: 0 24px;
  margin: 0 auto;
`

export default function App (): React.ReactElement {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalAppStyle/>
        <StyledApp>
          <Home/>
        </StyledApp>
      </ThemeProvider>
    </React.Fragment>
  )
}
