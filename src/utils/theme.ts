type Theme = {
  backgroundColor: string,
  fontSizeDefault: string,
  fontSizeMedium: string,
  fontSizeLarge: string
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export const theme: Theme = {
  backgroundColor: '#111314',
  fontSizeDefault: '1rem',
  fontSizeMedium: '1.25rem',
  fontSizeLarge: '1.5rem'
}
