import React, { useState, useEffect } from "react";
import { Button, Input } from "antd";
import {
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
      const data = { token: router.query.token, password: password };
      const body = JSON.stringify(data);

      //send request
      const url = `${baseUrl}/api/verification/authenticate/forgotPassword`;
      await axios.patch(url, body, config);
      setSuccess(true);
      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (err) {
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Password Reset</Title>
      <Subtitle>Password must be at least 6 characters</Subtitle>
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
        Reset Password
      </Button>
      {isSuccess && (
        <SuccessMessage>
          <CheckCircleTwoTone twoToneColor='#52c41a' /> Password Successfully
          Changed!
        </SuccessMessage>
      )}
      {isSuccess === false && (
        <ErrorMessage>
          <ExclamationCircleTwoTone twoToneColor='#fcbe03' /> Could Not Reset
          Password
        </ErrorMessage>
      )}
    </Container>
  );
};

export default index;
