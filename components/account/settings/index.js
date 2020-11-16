import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Button } from "antd";
import baseUrl from "../../../utils/baseUrl";
import axios from "axios";

import { Container, ButtonsContainer, ButtonText } from "./style";
import MyAccount from "./MyAccount";
import Location from "./Location";
import Preferences from "./Preferences";
import Management from "./Management";

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
  const router = useRouter();

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

    //refresh page after account data update
    if (res) {
      router.reload(window.location.pathname);
    }

    //send email notification if user's password was updated
    if (
      res &&
      userData.password &&
      userData.newPassword &&
      userData.newPasswordConfirm
    ) {
      //stringify the body items
      const passwordChangeBody = JSON.stringify({
        userEmail: user.email,
        username: user.username,
        userId: user._id,
      });

      const passwordChangeUrl = `${baseUrl}/api/verification/send/passwordChange`;
      await axios
        .post(passwordChangeUrl, passwordChangeBody, config)
        .catch((error) => {
          console.log("Could not send email regarding password change");
        });
      console.log("Password Updated: Email Sent!");
    }

    //send email notification if user's email was updated
    if (res && userData.email) {
      //stringify the body items
      const emailChangeBody = JSON.stringify({
        oldUserEmail: user.email,
        newUserEmail: userData.email,
        username: user.username,
        userId: user._id,
      });

      const emailChangeUrl = `${baseUrl}/api/verification/send/emailChange`;
      await axios
        .post(emailChangeUrl, emailChangeBody, config)
        .catch((error) => {
          console.log("Could not send email regarding email change");
        });
      console.log("Email Updated: Email Sent!");
    }
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
          type='primary'
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
      <Management user={user} />
    </Container>
  );
};

export default index;
