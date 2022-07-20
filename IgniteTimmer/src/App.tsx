// Styled Components
// npm i styled-components
// Types do styled Components
// npm i @types/styled-components -D

import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Button variant="primary"></Button>
      <Button variant="secondary"></Button>

      <GlobalStyle />
    </ThemeProvider>
  )
}
