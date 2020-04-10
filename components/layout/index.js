import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { USER_LOADED } from '../../actions/types';
import { withRedux } from '../../utils/with-redux-store';
import Navbar from '../navbar';
import Footer from '../footer';
import Login from '../login';
import Register from '../register';
import setTokenHeader from '../../utils/setTokenHeader';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function Layout({ children, user, token }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch({ type: USER_LOADED, payload: user });
      setTokenHeader(token);
    } else {
      setTokenHeader();
    }
  }, [user]);

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
