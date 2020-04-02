import React from 'react';
import {
  HomeOutlined,
  PlusOutlined,
  UserOutlined,
  UserAddOutlined,
  FormOutlined,
  MailOutlined,
  StarOutlined,
  LogoutOutlined
} from '@ant-design/icons';

export default [
  { title: 'Home', href: '/', icon: <HomeOutlined />, protected: false },
  { title: 'Home', href: '/', icon: <HomeOutlined />, protected: true },
  { title: 'Create Post', href: '/', icon: <PlusOutlined />, protected: true },
  { title: 'Create Post', href: '/', icon: <PlusOutlined />, protected: false },
  { title: 'My Account', href: '/', icon: <UserOutlined />, protected: true },
  { title: 'My Posts', href: '/', icon: <FormOutlined />, protected: true },
  { title: 'My Messages', href: '/', icon: <MailOutlined />, protected: true },
  { title: 'My Favorites', href: '/', icon: <StarOutlined />, protected: true },
  { title: 'Login', href: '/', icon: <UserOutlined />, protected: false },
  { title: 'Register', href: '/', icon: <UserAddOutlined />, protected: false },
  { title: 'Logout', href: '/', icon: <LogoutOutlined />, protected: true }
];
