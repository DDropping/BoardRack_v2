import Head from "next/head";
import styled from "styled-components";

import Header from "../components/account/header";
import Menu from "../components/account/menu";
import AccordionMenu from "../components/account/menu/accordionMenu";
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
      <AccordionMenu />
      <Flexbox>
        <Menu />
        <DisplayData />
      </Flexbox>
    </Container>
  </div>
);

export default Account;
