import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { MailOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

import { TOGGLE_REGISTER, TOGGLE_LOGIN } from "../../actions/types";
import baseUrl from "../../utils/baseUrl";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const ForgotPasswordForm = ({ setForgotPasswordVisible }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isSent, setSent] = useState(null);

  //disable login button if fields are empty
  useEffect(() => {
    const emailVaidate = /\S+@\S+\.\S+/;
    if (emailVaidate.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email]);

  //handle submit
  const handleSubmit = async () => {
    //set headers for request
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //stringify the form items
    const data = { userEmail: email };
    const body = JSON.stringify(data);

    //update post to DB
    try {
      setSent(null);
      const url = `${baseUrl}/api/verification/send/forgotPassword`;
      const res = await axios.post(url, body, config);
      if (res) {
        setSent(true);
      } else {
        setSent(false);
      }
    } catch (err) {
      setSent(false);
    }
  };

  return (
    <div>
      <p style={{ marginBottom: "1em", textAlign: "center" }}>
        Forgot your password? No problem! Enter your email in the input below to
        send a recovery link to your registered email address.
      </p>
      <InputWrapper>
        <Input
          placeholder='Email'
          prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
      </InputWrapper>
      <Button
        type='primary'
        htmlType='submit'
        loading={loading}
        size='large'
        style={{ width: "100%" }}
        disabled={disabled}
        onClick={handleSubmit}
      >
        Send Recovery Link
      </Button>
      <Button
        type='link'
        onClick={() => setForgotPasswordVisible(false)}
        style={{ marginTop: "1em" }}
      >
        <LeftOutlined /> Click here to return to Login
      </Button>
    </div>
  );
};

export default ForgotPasswordForm;
