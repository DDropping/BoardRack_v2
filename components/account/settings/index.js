import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Input, Row } from "antd";

import { Container } from "./style";
import MyAccount from "./MyAccount";
import Location from "./Location";
import ManageAccount from "./ManageAccount";

const index = () => {
  const initialState = {
    username: "",
    email: "",
    password: "",
    defaultLocation: "",
  };

  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(initialState);

  return (
    <Container>
      <MyAccount user={user} userData={userData} setUserData={setUserData} />
      <Location user={user} userData={userData} setUserData={setUserData} />
      <ManageAccount user={user} />

      <Button type="primary">Save Changes</Button>
    </Container>
  );
};

export default index;
