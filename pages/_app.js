import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { parseCookies, destroyCookie } from 'nookies';

import Layout from '../components/layout';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';

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

  backgroundBlueMenu: '#4878a91f',

  //media sizes
  sm: '576px', // Small devices (landscape phones, 576px and up)
  md: '768px', // Medium devices (tablets, 768px and up)
  lg: '992px', // Large devices (desktops, 992px and up)
  xl: '1200px' // Extra large devices (large desktops, 1200px and up)
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { token } = parseCookies(ctx);
    pageProps.token = token;

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    if (!token) {
      //redirect from protected routes if user not logged in
      const isProtectedRoute =
        ctx.pathname === '/createpost' ||
        ctx.pathname === '/account' ||
        ctx.pathname === '/account/myposts' ||
        ctx.pathname === '/account/mymessages' ||
        ctx.pathname === '/account/myfavorites';
      if (isProtectedRoute) {
        redirectUser(ctx, '/');
      }
    } else {
      try {
        //retrieve user data from db
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/auth/accountData`;
        const res = await axios.get(url, payload);
        const user = res.data;

        //redirect from admin dashboard if not authorized
        const isRoot = user.role === 'root';
        const isAdmin = user.role === 'admin';
        const isNotPermitted =
          !(isRoot || isAdmin) && ctx.pathname === '/dashboard';
        if (isNotPermitted) {
          redirectUser(ctx, '/');
        }

        //set user in page props
        pageProps.user = user;
      } catch (err) {
        console.log(err);
        destroyCookie(ctx, 'token');
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout {...pageProps}>
          <Head>
            <link rel="shortcut icon" href="/images/br_favicon.ico" />
          </Head>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
