export const theme = {
  backgroundColor: '#0E0E11',
  colorBackgroundTabPrimaryDefault: '#D9D9D9',
  colorBorderTabPrimaryDefault: '#D9D9D9',
  colorTextTabPrimaryDefault: '#000000',
  colorBackgroundTabSecondaryDefault: '#0E0E11',
  colorBorderTabSecondaryDefault: '#282834',
  colorTextTabSecondaryDefault: '#88869F',
  colorTextDefault: "#FFFFFF",
  colorTextOff: "#88869F",
  fontSizeDefault: '1rem',
  fontSizeMedium: '1.25rem',
  fontSizeLarge: '1.5rem',
  fontSizeHeading1Default: '2rem',
  fontSizeHeading2Default: '28px',
  fontSizeHeading3Default: '24px',
  spacingXXSmallDefault: '8px',
  spacingSmallDefault: '12px',
  spacingDefault: '1.5rem',
}

type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
