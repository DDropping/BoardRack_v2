import App from "next/app";
import React from "react";
import Head from "next/head";
import axios from "axios";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import { parseCookies, destroyCookie } from "nookies";

import "../components/postModal/react-modal-custom.less";

//import "antd/dist/antd.less"; //import entire library styles // import specific styles
import "antd/lib/button/style";
import "antd/lib/card/style";
import "antd/lib/carousel/style";
import "antd/lib/checkbox/style";
import "antd/lib/col/style";
import "antd/lib/divider/style";
import "antd/lib/drawer/style";
import "antd/lib/dropdown/style";
import "antd/lib/form/style";
import "antd/lib/grid/style";
import "antd/lib/input/style";
import "antd/lib/input-number/style";
import "antd/lib/menu/style";
import "antd/lib/modal/style";
import "antd/lib/notification/style";
import "antd/lib/progress/style";
import "antd/lib/row/style";
import "antd/lib/select/style";
import "antd/lib/skeleton";
import "antd/lib/slider/style";
import "antd/lib/steps/style";
import "antd/lib/switch/style";
import "antd/lib/tabs/style";
import "antd/lib/tooltip/style";

import Layout from "../components/layout";
import { redirectUser } from "../utils/auth";
import baseUrl from "../utils/baseUrl";

const GlobalStyle = createGlobalStyle`
*{
  font-family: 'Roboto', sans-serif;
  padding: 0;
  margin: 0;
  text-decoration: none;
  a{
    color: ${(props) => props.theme.primaryBlack}
    }
    .ant-menu-item-selected{
      background-color: none;
    }
  }
`;

export const theme = {
  //colors
  primaryBlue: "#00458a",
  secondaryBlue: "#4878a9",

  primaryRed: "#ef4040",
  primaryLightRed: "#ef404017",
  secondaryRed: "#ee7a7a",

  primaryOrange: "#ffb700",

  primaryBlack: "#222222",

  primaryWhite: "#ffffff",
  secondaryWhite: "#eeeeee",

  primaryGrey: "#d9d9d9",
  primaryLightGrey: "#bbb",
  primaryDarkGrey: "#949494",

  primaryGreen: "#65e824",
  primaryLightGreen: "#65e82417",

  backgroundBlueMenu: "#4878a91f",
  backgroundLightBlueMenu: "#4878a905",
  backgroundGreyMenu: "#5858581f",
  backgroundRedMenu: "#ef40401f",

  primaryTransparentWhite: "#ffffffd9",

  //media sizes
  xs: "375px", // extra small devices
  xs1: "376px", // +1 for @media queries
  sm: "576px", // Small devices (landscape phones, 576px and up)
  sm1: "577px", // +1 for @media queries
  md: "768px", // Medium devices (tablets, 768px and up)
  md1: "769px", // +1 for @media queries
  lg: "992px", // Large devices (desktops, 992px and up)
  lg1: "993px", // +1 for @media queries
  xl: "1200px", // Extra large devices (large desktops, 1200px and up)
  xl1: "1201px", // +1 for @media queries

  //transitions
  easeInOut: "all 0.2s ease-in-out",
  boxShadow: "box-shadow 0.3s",
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
        ctx.pathname === "/createpost" ||
        ctx.pathname === "/account" ||
        ctx.pathname === "/account/myposts" ||
        ctx.pathname === "/account/mymessages" ||
        ctx.pathname === "/account/myfavorites";
      if (isProtectedRoute) {
        redirectUser(ctx, "/");
      }
    } else {
      try {
        //retrieve user data from db
        const payload = { headers: { Authorization: token } };
        const url = `${baseUrl}/api/auth/accountData`;
        const res = await axios.get(url, payload);
        const user = res.data;

        //redirect from admin dashboard if not authorized
        const isRoot = user.role === "root";
        const isAdmin = user.role === "admin";
        const isNotPermitted =
          !(isRoot || isAdmin) && ctx.pathname === "/dashboard";
        if (isNotPermitted) {
          redirectUser(ctx, "/");
        }

        //set user in page props
        pageProps.user = user;
      } catch (err) {
        console.log(err);
        destroyCookie(ctx, "token");
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
