import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import {
  MailOutlined,
  LockOutlined,
  ExclamationCircleTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import axios from "axios";
import { useRouter } from "next/router";

import {
  Container,
  Title,
  Subtitle,
  TextTitle,
  InputWrapper,
  SuccessMessage,
  ErrorMessage,
} from "./style";
import baseUrl from "../../../utils/baseUrl";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(null);
  const [isDisabled, setDisabled] = useState(true);
  const router = useRouter();

  //disable reset password button if passwords dont match criteria
  useEffect(() => {
    if (password.length >= 6 && password === confirmPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  //handle submit function
  const handleSubmit = async () => {
    setLoading(true);
    setSuccess(null);

    try {
      //set headers for request
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //stringify the form items
      const data = {
        token: router.query.token,
        password: password,
        email: email,
      };
      const body = JSON.stringify(data);

      //send request
      const url = `${baseUrl}/api/verification/authenticate/recoverAccount`;
      await axios.patch(url, body, config);
      setSuccess(true);
    } catch (err) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Account Recovery</Title>
      <Subtitle>
        To reset your account credentials, enter your email address and a NEW
        password below. Then click 'Reset Account Credentials'
      </Subtitle>
      <Subtitle>Password must be at least 6 characters</Subtitle>
      <TextTitle>Email:</TextTitle>
      <InputWrapper>
        <Input
          placeholder='Email'
          prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          style={{ marginRight: "1em" }}
        />
        <div style={{ fontSize: "1.5rem" }}>
          {/\S+@\S+\.\S+/.test(email) ? (
            <CheckCircleTwoTone twoToneColor='#52c41a' />
          ) : (
            <ExclamationCircleTwoTone twoToneColor='#fcbe03' />
          )}
        </div>
      </InputWrapper>
      <TextTitle>New Password:</TextTitle>
      <InputWrapper>
        <Input.Password
          placeholder='Password'
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          style={{ marginRight: "1em" }}
        />
        <div style={{ fontSize: "1.5rem" }}>
          {password.length >= 6 ? (
            <CheckCircleTwoTone twoToneColor='#52c41a' />
          ) : (
            <ExclamationCircleTwoTone twoToneColor='#fcbe03' />
          )}
        </div>
      </InputWrapper>
      <TextTitle>Confirm New Password:</TextTitle>
      <InputWrapper>
        <Input.Password
          placeholder='Password'
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type='password'
          style={{ marginRight: "1em" }}
        />
        <div style={{ fontSize: "1.5rem" }}>
          {password === confirmPassword && password.length >= 6 ? (
            <CheckCircleTwoTone twoToneColor='#52c41a' />
          ) : (
            <ExclamationCircleTwoTone twoToneColor='#fcbe03' />
          )}
        </div>
      </InputWrapper>
      <Button
        type='primary'
        htmlType='submit'
        loading={isLoading}
        size='large'
        disabled={isDisabled}
        onClick={handleSubmit}
      >
        Reset Account Credentials
      </Button>
      {isSuccess && (
        <SuccessMessage>
          <CheckCircleTwoTone twoToneColor='#52c41a' /> Account Credentials
          Successfully Changed!
        </SuccessMessage>
      )}
      {isSuccess === false && (
        <ErrorMessage>
          <ExclamationCircleTwoTone twoToneColor='#fcbe03' /> Could Not Reset
          Account Credentials
        </ErrorMessage>
      )}
    </Container>
  );
};

export default index;
