import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Button } from 'antd';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

const Home = props => (
  <div className="container">
    <Head>
      <title>BoardRack | Home</title>
    </Head>
    <div>home</div>
    <button
      onClick={() => {
        const res = axios.post('http://localhost:3000/api/posts/createpost');
      }}
    >
      test
    </button>
  </div>
);

// Home.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Home;
