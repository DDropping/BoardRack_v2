import App from "next/app";
import React from "react";
import Head from "next/head";
import axios from "axios";
import {
  ThemeProvider,
  createGlobalStyle,
  StyleSheetManager,
} from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { getCookie, destroyCookie } from "../utils/cookies";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { Roboto } from "next/font/google";

// antd v5 targets React 16-18; this patch adapts its static APIs
// (Modal.confirm, notification, message) to the React 19 render API.
import "@ant-design/v5-patch-for-react-19";

import "../styles/globals.css";

import Layout from "../components/layout";
import { redirectUser } from "../utils/auth";
import baseUrl from "../utils/baseUrl";

// styled-components v6 stopped auto-filtering unknown props, so custom props
// such as `active`, `isSold` and `bgColor` started leaking onto DOM nodes and
// triggering React attribute warnings. This restores the v5 behaviour: filter
// props for host (DOM) elements, forward everything to React components.
function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    return isPropValid(propName);
  }
  return true;
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

const GlobalStyle = createGlobalStyle`
  * {
    font-family: ${(props) => props.theme.fontFamily};
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  a {
    color: ${(props) => props.theme.primaryBlack};
  }
  .ant-menu-item-selected {
    background-color: transparent;
  }
`;

export const theme = {
  //fonts
  fontFamily: roboto.style.fontFamily,

  //colors
  primaryBlue: "#00458a",
  secondaryBlue: "#4878a9",
  secondaryLightBlue: "#dfefff",

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

  //dark mode colors
  darkModePrimaryBlack: "#181818",
  darkModeSecondaryBlack: "#212121",

  darkModePrimaryGrey: "#303030",

  darkModePrimaryTextWhite: "#ffffff",
  darkModeSecondaryTextWhite: "#aaa",

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

// Replaces public/antd-custom.less. antd v5 is CSS-in-JS, so the old Less
// variables (@primary-color, @border-radius-base, @layout-header-height and the
// .ant-drawer-body padding override) become design tokens.
export const antdTheme = {
  token: {
    colorPrimary: theme.primaryBlue,
    borderRadius: 2,
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    Layout: { headerHeight: 40 },
    Drawer: { paddingLG: 0 },
  },
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const token = getCookie("token", ctx);
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
        destroyCookie("token", ctx);
      }
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <StyleSheetManager shouldForwardProp={shouldForwardProp}>
        {/* hashPriority="high" drops antd v5's :where() wrapper so the
            styled-components overrides throughout this app keep winning on
            specificity, the way they did against antd v4's flat selectors. */}
        <StyleProvider hashPriority='high'>
          <ConfigProvider theme={antdTheme}>
            <ThemeProvider theme={theme}>
              <Layout {...pageProps}>
                <Head>
                  <link rel='shortcut icon' href='/images/br_favicon.ico' />
                </Head>
                <GlobalStyle />
                <Component {...pageProps} />
              </Layout>
            </ThemeProvider>
          </ConfigProvider>
        </StyleProvider>
      </StyleSheetManager>
    );
  }
}
