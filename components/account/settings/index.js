import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

import { Container, ButtonsContainer, ButtonText } from "./style";
import MyAccount from "./MyAccount";
import Location from "./Location";
import Preferences from "./Preferences";
import ManageAccount from "./ManageAccount";

const index = () => {
  const initialState = {
    email: "",
    password: "",
    newPassword: "",
    newPasswordConfirm: "",
    profileImage: "",
  };

  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState(null);

  const updateUserData = async () => {
    setErrorMessage(null);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //stringify the form items
    const body = JSON.stringify(userData);

    const url = `${baseUrl}/api/auth/updateAccount`;
    const res = await axios.patch(url, body, config).catch((error) => {
      setErrorMessage(error.response.data);
    });
    console.log(res);
  };

  return (
    <Container>
      <ButtonsContainer
        isError={!!errorMessage}
        isNotSaved={JSON.stringify(userData) !== JSON.stringify(initialState)}
      >
        <div style={{ flex: 1 }} />
        <ButtonText>
          {!errorMessage &&
            (JSON.stringify(userData) !== JSON.stringify(initialState)
              ? "*Changes are not currently saved"
              : "*Account Up to Date")}
          {errorMessage}
        </ButtonText>
        <Button
          type="primary"
          onClick={updateUserData}
          disabled={
            JSON.stringify(userData) === JSON.stringify(initialState) ||
            userData.newPassword !== userData.newPasswordConfirm
          }
        >
          Save Changes
        </Button>
      </ButtonsContainer>
      <MyAccount user={user} userData={userData} setUserData={setUserData} />
      <Location user={user} userData={userData} setUserData={setUserData} />
      <Preferences />
      <ManageAccount user={user} />
    </Container>
  );
};

export default index;
