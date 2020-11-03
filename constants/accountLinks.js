import React from "react";
import {
  FormOutlined,
  MailOutlined,
  StarOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default [
  {
    title: "Account Overview",
    href: "/account?view=overview",
    view: "overview",
    icon: <UserOutlined />,
  },
  {
    title: "My Boardrack",
    href: "/account?view=posts",
    view: "posts",
    icon: <FormOutlined />,
  },
  {
    title: "My Favorites",
    href: "/account?view=favorites",
    view: "favorites",
    icon: <StarOutlined />,
  },
  {
    title: "My Messages",
    href: "/account?view=messages",
    view: "messages",
    icon: <MailOutlined />,
  },
  {
    title: "Account Settings",
    href: "/account?view=settings",
    view: "settings",
    icon: <SettingOutlined />,
  },
];
