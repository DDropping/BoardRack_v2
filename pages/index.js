import Head from 'next/head';
import { Button } from 'antd';

import Layout from '../components/layout';

const Home = () => (
  <Layout>
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button type="primary">Primary</Button>{' '}
    </div>
  </Layout>
);

export default Home;
