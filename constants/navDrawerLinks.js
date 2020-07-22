import React from "react";
import {
  FormOutlined,
  HomeOutlined,
  MailOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default [
  { title: "Home", href: "/", icon: <HomeOutlined />, protected: false },
  { title: "Home", href: "/", icon: <HomeOutlined />, protected: true },
  {
    title: "My Account",
    href: "/account",
    icon: <UserOutlined />,
    protected: true,
  },
  {
    title: "My Boardrack",
    href: "/account?view=posts",
    icon: <FormOutlined />,
    protected: true,
  },
  {
    title: "My Favorites",
    href: "/account?view=favorites",
    icon: <StarOutlined />,
    protected: true,
  },
  {
    title: "My Messages",
    href: "/account?view=messages",
    icon: <MailOutlined />,
    protected: true,
  },
];
