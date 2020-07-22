import Head from "next/head";
import styled from "styled-components";

import Header from "../components/account/header";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Account = () => (
  <div className="container">
    <Head>
      <title>BoardRack | Account</title>
    </Head>
    <Container>
      <Header />
    </Container>
  </div>
);

export default Account;
