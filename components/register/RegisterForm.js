import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import catchErrors from '../../utils/catchErrors';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const A = styled.a`
  color: ${({ theme }) => theme.secondaryBlue};
`;

const INITIAL_USER = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const RegisterForm = () => {
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
      console.log(user);
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
          placeholder="Username"
          prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          name="username"
          value={user.username}
          onChange={handleChange}
          type="username"
        />
      </InputWrapper>
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
      <InputWrapper>
        <Input
          placeholder="Confirm Password"
          prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          size="large"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          type="confirmPassword"
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
          Register
        </Button>
      </Form.Item>
      <div style={{ marginTop: '1rem' }}>
        Already have an account?{' '}
        <Link href="/">
          <A onClick={() => console.log('login')}>Login</A>
        </Link>
      </div>
    </Form>
  );
};

export default RegisterForm;
