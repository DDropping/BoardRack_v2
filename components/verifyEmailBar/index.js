import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import cookie from "js-cookie";
import axios from "axios";

import baseUrl from "../../utils/baseUrl";

const Container = styled.div`
  padding: 4px;
  width: 100%;
  color: ${({ theme }) => theme.primaryWhite};
  background-color: ${({ theme }) => theme.primaryBlue};
`;

const Contenet = styled.div`
  margin: 0 auto;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
`;

const Link = styled.a`
  color: #dfe1e6;
  text-decoration: none;
  margin: 0 10px;
  text-decoration: underline;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans,
    Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
  :hover {
    color: #dfe1e6;
    text-decoration: underline;
  }
`;

const Space = styled.span`
  margin-left: 10px;
`;

const index = () => {
  const [isVisible, setVisible] = useState(true);
  const [isSent, setSent] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const sendVerifyEmail = async () => {
    //set headers for request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //stringify the form items
    const data = { userId: user._id, userEmail: user.email };
    const body = JSON.stringify(data);

    //update post to DB
    try {
      const url = `${baseUrl}/api/verification/send/verifyEmail`;
      await axios.post(url, body, config);
      setSent(true);
      setTimeout(() => {
        setVisible(false);
      }, 3000);
    } catch (err) {}
  };

  if (
    user &&
    !user.emailConfirmed &&
    !cookie.get("verifyEmailRemindLater") &&
    isVisible
  )
    return (
      <Container>
        <Contenet>
          {`Hi ${user.username}! We need you to confirm your email address.`}
          <Space />
          {isSent ? (
            "Email sent!"
          ) : (
            <>
              <Link onClick={sendVerifyEmail}>Resend email</Link>•
              <Link
                onClick={() => {
                  cookie.set("verifyEmailRemindLater", "true", { expires: 1 });
                  setVisible(false);
                }}
              >
                Remind me later
              </Link>
            </>
          )}
        </Contenet>
      </Container>
    );
  else return null;
};

export default index;
