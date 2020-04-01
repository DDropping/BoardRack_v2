import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Roboto', sans-serif;
}
`;

const theme = {
  colors: {
    primaryBlue: '#00458a',
    secondaryBlue: '#4878a9',
    primaryWhite: '#ffffff',
    primaryGrey: '#f3f7f9',
    primaryGreen: '#52c41a'
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
