import React from "react";
import {
  FormOutlined,
  HomeOutlined,
  MailOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default [
  { title: "Home", href: "/", icon: <HomeOutlined /> },
  {
    title: "Account Overview",
    href: "/account",
    icon: <UserOutlined />,
  },
  {
    title: "My Boardrack",
    href: "/account?view=posts",
    icon: <FormOutlined />,
  },
  {
    title: "My Favorites",
    href: "/account?view=favorites",
    icon: <StarOutlined />,
  },
  {
    title: "My Messages",
    href: "/account?view=messages",
    icon: <MailOutlined />,
  },
];
