import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import Layout from '../components/layout';

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  a{
    color: ${props => props.theme.primaryBlack}
    }
  }
`;

const theme = {
  //colors
  primaryBlue: '#00458a',
  secondaryBlue: '#4878a9',
  primaryBlack: '#222222',
  primaryWhite: '#ffffff',
  primaryGrey: '#f3f7f9',
  primaryGreen: '#52c41a',

  //media sizes
  sm: '576px', // Small devices (landscape phones, 576px and up)
  md: '768px', // Medium devices (tablets, 768px and up)
  lg: '992px', // Large devices (desktops, 992px and up)
  xl: '1200px' // Extra large devices (large desktops, 1200px and up)
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
