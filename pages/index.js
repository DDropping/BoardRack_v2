import Head from 'next/head';
import { Button } from 'antd';
import styled from 'styled-components';

import Layout from '../components/layout';

const Button2 = styled.button`
  font-size: 2rem;
  color: red;
  background-color: blue;
`;

const Home = () => (
  <Layout>
    <div className="container">
      <Head>
        <title>BoardRack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  </Layout>
);

export default Home;
