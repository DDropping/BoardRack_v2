import React from "react";
import {
  FormOutlined,
  HomeOutlined,
  MailOutlined,
  StarOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default [
  {
    title: "Home",
    href: "/",
    view: "",
    icon: <HomeOutlined />,
    protected: false,
  },
  {
    title: "Home",
    href: "/",
    view: "",
    icon: <HomeOutlined />,
    protected: true,
  },
  {
    title: "My Account",
    href: "/account?view=overview",
    view: "overview",
    icon: <UserOutlined />,
    protected: true,
  },
  {
    title: "My Boardrack",
    href: "/account?view=posts",
    view: "posts",
    icon: <FormOutlined />,
    protected: true,
  },
  {
    title: "My Favorites",
    href: "/account?view=favorites",
    view: "favorites",
    icon: <StarOutlined />,
    protected: true,
  },
  {
    title: "My Messages",
    href: "/account?view=messages",
    view: "messages",
    icon: <MailOutlined />,
    protected: true,
  },
  {
    title: "Account Settings",
    href: "/account?view=settings",
    view: "settings",
    icon: <SettingOutlined />,
    protected: true,
  },
];
