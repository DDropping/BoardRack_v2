import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import catchErrors from '../../utils/catchErrors';
import { handleLogin } from '../../utils/auth';
import baseUrl from '../../utils/baseUrl';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const INITIAL_USER = {
  email: '',
  password: ''
};

const LoginForm = () => {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/auth/login`;
      const payload = { ...user };
      const response = await axios.post(url, payload);
      handleLogin(response.data.token);
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
          placeholder="Email"
          prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          name="email"
          value={user.email}
          onChange={handleChange}
          type="email"
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="Password"
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          name="password"
          value={user.password}
          onChange={handleChange}
          type="password"
        />
      </InputWrapper>
      <Checkbox>Remember me</Checkbox>
      <Link href="/">
        <A style={{ float: 'right' }}>Forgot password</A>
      </Link>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          size="large"
          style={{ width: '100%' }}
          disabled={disabled}
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Form.Item>
      <div style={{ marginTop: '1rem' }}>
        Don't have an account yet?{' '}
        <Link href="/">
          <A onClick={() => console.log('register now')}>Register now!</A>
        </Link>
      </div>
    </Form>
  );
};

export default LoginForm;
