import React from "react";
import {
  FormOutlined,
  MailOutlined,
  StarOutlined,
  UserOutlined,
} from "@ant-design/icons";

export default [
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
