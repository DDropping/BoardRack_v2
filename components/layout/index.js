import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { withRedux } from '../../utils/with-redux-store';
import Navbar from '../navbar';
import Footer from '../footer';
import Login from '../login';
import Register from '../register';
import setTokenHeader from '../../utils/setTokenHeader';

import { loadUserByProps } from '../../actions/auth';
import { getLocationWithIp } from '../../actions/location';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  position: relative;
  flex: 1;
`;

function Layout({ children, user, token }) {
  const dispatch = useDispatch();
  const isLocated = useSelector((state) => state.currentLocation.isLocated);

  useEffect(() => {
    if (!isLocated) {
      dispatch(getLocationWithIp());
    }
    if (user) {
      dispatch(loadUserByProps(user));
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
