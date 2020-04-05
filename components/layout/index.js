import React, { useEffect } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import { USER_LOADED } from '../../actions/types';
import { withRedux } from '../../utils/with-redux-store';
import Navbar from '../navbar';
import Footer from '../footer';
import Login from '../login';
import Register from '../register';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function Layout({ children, user }) {
  const dispatch = useDispatch();

  if (user) {
    dispatch({ type: USER_LOADED, payload: user });
  }

  return (
    <>
      <Head>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>
      <Container>
        <Navbar user />
        <Login />
        <Register />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
}

export default withRedux(Layout);
