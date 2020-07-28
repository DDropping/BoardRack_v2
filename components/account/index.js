import React from "react";
import { useRouter } from "next/router";

import Overview from "./overview";
import Posts from "./posts";
import Favorites from "./favorites";
import Messages from "./messages";
import { Container } from "./style";

const index = () => {
  const router = useRouter();
  return (
    <Container>
      {router.query.view === "overview" && <Overview />}
      {router.query.view === "posts" && <Posts />}
      {router.query.view === "favorites" && <Favorites />}
      {router.query.view === "messages" && <Messages />}
    </Container>
  );
};

export default index;
