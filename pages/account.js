import Head from "next/head";
import styled from "styled-components";

import Header from "../components/account/header";
import Menu from "../components/account/menu";
import DisplayData from "../components/account";

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

const Flexbox = styled.div`
  display: flex;
`;

const Account = () => (
  <div className="container">
    <Head>
      <title>BoardRack | Account</title>
    </Head>
    <Container>
      <Header />
      <Flexbox>
        <Menu />
        <DisplayData />
      </Flexbox>
    </Container>
  </div>
);

export default Account;
