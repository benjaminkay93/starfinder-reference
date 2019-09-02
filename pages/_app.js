import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utilities/theme'
import Navigation from 'components/Navigation'

class AppWrapper extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme({mode: 'light'})}>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </ThemeProvider>
    )
  }
}

export default AppWrapper
