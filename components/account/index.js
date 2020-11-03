import React from "react";
import { useRouter } from "next/router";

import Overview from "./overview";
import Posts from "./myPosts";
import Favorites from "./myFavorites";
import Messages from "./myMessages";
import Settings from "./settings";
import { Container } from "./style";

const index = () => {
  const router = useRouter();
  return (
    <Container>
      {router.query.view === "overview" && <Overview />}
      {router.query.view === "posts" && <Posts />}
      {router.query.view === "favorites" && <Favorites />}
      {router.query.view === "messages" && <Messages />}
      {router.query.view === "settings" && <Settings />}
    </Container>
  );
};

export default index;
