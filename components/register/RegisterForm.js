import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { Button, Checkbox, Form, Input } from "antd";
import { MailOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { TOGGLE_REGISTER, TOGGLE_LOGIN, AUTH_USER } from "../../actions/types";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { loadUserByCookie } from "../../actions/auth";
import PasswordStrength from "../passwordStrength";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.primaryRed};
`;

const INITIAL_USER = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const emailVaidate = /\S+@\S+\.\S+/;

  //disable register button if fields are empty
  useEffect(() => {
    const isUser =
      Object.values(user).every((el) => Boolean(el)) &&
      user.password === user.confirmPassword &&
      user.username.length >= 5 &&
      user.password.length >= 6 &&
      emailVaidate.test(user.email);
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  //update user data handler
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  //register handler
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/auth/register`;
      const payload = { ...user };
      const res = await axios.post(url, payload);
      dispatch({ type: AUTH_USER, payload: res.data.token });
      dispatch(loadUserByCookie());
      dispatch({ type: TOGGLE_REGISTER, payload: false });
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <ErrorMessage>{error}</ErrorMessage>
      <InputWrapper>
        <Input
          placeholder='Username'
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='username'
          value={user.username}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder='Email'
          prefix={<MailOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='email'
          value={user.email}
          onChange={handleChange}
          type='email'
        />
      </InputWrapper>
      <InputWrapper>
        <Input.Password
          placeholder='Password'
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='password'
          value={user.password}
          onChange={handleChange}
          type='password'
        />
      </InputWrapper>
      <InputWrapper>
        <Input.Password
          placeholder='Confirm Password'
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          size='large'
          name='confirmPassword'
          value={user.confirmPassword}
          onChange={handleChange}
          type='password'
        />
        <PasswordStrength password={user.password} />
      </InputWrapper>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox>Remember me</Checkbox>
        {(user.password !== user.confirmPassword && (
          <ErrorMessage>Passwords do not match</ErrorMessage>
        )) ||
          (user.username.length < 5 && user.username.length > 0 && (
            <ErrorMessage>Username requires at least 5 characters</ErrorMessage>
          )) ||
          (user.password.length < 6 && user.password.length > 0 && (
            <ErrorMessage>Password requires at least 6 characters</ErrorMessage>
          )) ||
          (!emailVaidate.test(user.email) && user.email.length > 0 && (
            <ErrorMessage>Invalid email address</ErrorMessage>
          ))}
      </div>
      <Form.Item>
        <Button
          type='primary'
          htmlType='submit'
          loading={loading}
          size='large'
          style={{ width: "100%" }}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Register
        </Button>
      </Form.Item>
      <div>
        Already have an account?{" "}
        <Link href='/'>
          <A
            onClick={() => {
              dispatch({ type: TOGGLE_LOGIN, payload: true });
              dispatch({ type: TOGGLE_REGISTER, payload: false });
            }}
          >
            Click here to Login
          </A>
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
