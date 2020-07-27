import React, { useState, useEffect } from "react";
import axios from "axios";

import baseUrl from "../../../utils/baseUrl";
import { Container, CardsContainer } from "./style";
import MyPosts from "../../displayPosts/myPosts";

const index = () => {
  return (
    <Container>
      <div>overview</div>
      <CardsContainer>
        <MyPosts />
      </CardsContainer>
    </Container>
  );
};

export default index;
