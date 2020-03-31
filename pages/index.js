import Head from 'next/head';
import { Button } from 'antd';

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Button type="primary">Primary</Button>{' '}
  </div>
);

export default Home;
