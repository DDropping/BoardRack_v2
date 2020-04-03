import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

const Home = props => (
  <div className="container">
    {console.log(props)}
    <Head>
      <title>BoardRack | Home</title>
    </Head>
    <div>home</div>
  </div>
);

Home.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/posts/allPosts');
  // const data = await res.json();

  // console.log(`Show data fetched. Count: ${data.length}`);

  return {
    // shows: data.map(entry => entry.show)
  };
};

export default Home;
