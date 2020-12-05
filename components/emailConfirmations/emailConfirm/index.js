import React, { useEffect } from "react";
import { useRouter } from "next/router";
import {
  CheckCircleTwoTone,
  ExclamationCircleTwoTone,
  LoadingOutlined,
} from "@ant-design/icons";

import {
  Container,
  ConfirmationBox,
  Title,
  Subtitle,
  RedirectText,
} from "./style";

const index = ({ isLoading, isSuccess }) => {
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [isSuccess]);

  return (
    <Container>
      {!isLoading && isSuccess && (
        <ConfirmationBox>
          <Title>
            <CheckCircleTwoTone twoToneColor='#52c41a' /> Email Confirmed!
          </Title>
          <Subtitle>Thank you for confirming your email address.</Subtitle>
          <RedirectText>
            You will be automatically redirected or{" "}
            <a
              onClick={() => {
                router.push("/");
              }}
            >
              click here
            </a>{" "}
            to go to the home page
          </RedirectText>
        </ConfirmationBox>
      )}
      {!isLoading && isSuccess === false && (
        <ConfirmationBox>
          <Title>
            <ExclamationCircleTwoTone twoToneColor='#fcbe03' /> Could Not
            Confirm Email
          </Title>
          <Subtitle>
            Uhh ohh.. Something went wrong. We couldn't confirm your email at
            this time. Please wait a couple minutes and try again.
          </Subtitle>
        </ConfirmationBox>
      )}
      {isLoading && (
        <ConfirmationBox>
          <Title>
            <LoadingOutlined twoToneColor='#52c41a' /> Confirming Email...
          </Title>
        </ConfirmationBox>
      )}
    </Container>
  );
};

export default index;
