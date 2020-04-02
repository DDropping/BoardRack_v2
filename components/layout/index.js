import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Navbar from '../navbar';
import Footer from '../footer';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="nprogress.css" />
      </Head>
      <Container>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
