import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// integração (sobrescripta) do tema com o default do styled-components
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
