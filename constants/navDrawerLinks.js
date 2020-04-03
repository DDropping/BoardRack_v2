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
  {
    title: 'Create Post',
    href: '/createpost',
    icon: <PlusOutlined />,
    protected: true
  },
  {
    title: 'Create Post',
    href: '/createpost',
    icon: <PlusOutlined />,
    protected: false
  },
  {
    title: 'My Account',
    href: '/account',
    icon: <UserOutlined />,
    protected: true
  },
  {
    title: 'My Posts',
    href: '/account/posts',
    icon: <FormOutlined />,
    protected: true
  },
  {
    title: 'My Messages',
    href: '/account/messages',
    icon: <MailOutlined />,
    protected: true
  },
  {
    title: 'My Favorites',
    href: '/account/favorites',
    icon: <StarOutlined />,
    protected: true
  },
  { title: 'Login', href: '/login', icon: <UserOutlined />, protected: false },
  {
    title: 'Register',
    href: '/register',
    icon: <UserAddOutlined />,
    protected: false
  },
  {
    title: 'Logout',
    href: '/logout',
    icon: <LogoutOutlined />,
    protected: true
  }
];
