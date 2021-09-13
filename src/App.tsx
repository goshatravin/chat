import React from 'react'
import { Route, Switch } from 'react-router-dom'
import original from 'react95/dist/themes/original'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'
import { styleReset } from 'react95'
import Login from './pages/login'
import Home from './pages/home'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'ms_sans_serif',system-ui;
  }
  ${styleReset}
`

// Get the viewport height and multiply it by 1% to get a value for a vh unit

let vh = window.innerHeight * 0.01
// Then set the custom --vh value to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`)

// We listen to the resize event
window.addEventListener('resize', () => {
    // Update the element's size
    vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
})

const App = () => (
    <div>
        <GlobalStyles />
        <ThemeProvider theme={original}>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={Home} />
            </Switch>
        </ThemeProvider>
    </div>
)

export default App
