import React from "react";
import Head from "next/head";

import Carousel from "../components/carousel";
import FiltersBar from "../components/filtersBar";
import FiltersBox from "../components/filtersBox";

const Home = (props) => (
  <div className="container">
    <Head>
      <title>BoardRack | Home</title>
    </Head>
    <div style={{ zIndex: 1, position: "relative" }}>
      <Carousel />
    </div>
    <div style={{ zIndex: 10, position: "relative" }}>
      <FiltersBar />
      <FiltersBox />
    </div>
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
