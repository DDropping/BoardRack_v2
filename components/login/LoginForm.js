import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { TOGGLE_REGISTER, TOGGLE_LOGIN, AUTH_USER } from "../../actions/types";
import catchErrors from "../../utils/catchErrors";
import baseUrl from "../../utils/baseUrl";
import { loadUserByCookie } from "../../actions/auth";

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const INITIAL_USER = {
  email: "",
  password: "",
};

const LoginForm = ({ setForgotPasswordVisible }) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  //disable login button if fields are empty
  useEffect(() => {
    const isUser = Object.values(user).every((el) => Boolean(el));
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

  //login handler
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError("");
      const url = `${baseUrl}/api/auth/login`;
      const payload = { ...user };
      const res = await axios.post(url, payload);
      dispatch({ type: AUTH_USER, payload: res.data.token });
      dispatch(loadUserByCookie());
      dispatch({ type: TOGGLE_LOGIN, payload: false });
    } catch (error) {
      catchErrors(error, setError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {error}
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
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Checkbox>Remember me</Checkbox>
        <A onClick={() => setForgotPasswordVisible(true)}>Forgot password</A>
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
          Login
        </Button>
      </Form.Item>
      <div style={{ marginTop: "1rem" }}>
        Don't have an account yet?{" "}
        <Link href='/'>
          <A
            onClick={() => {
              dispatch({ type: TOGGLE_REGISTER, payload: true });
              dispatch({ type: TOGGLE_LOGIN, payload: false });
            }}
          >
            Register now!
          </A>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
