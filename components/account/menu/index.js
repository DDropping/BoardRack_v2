import React from "react";
import Link from "next/link";
import { Menu } from "antd";

import { Container, A, Logout } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../constants/accountLinks";

const index = () => {
  return (
    <Container>
      <Menu>
        {accountLinks.map((item, index) => {
          return (
            <Menu.Item key={index} style={{ padding: 0, margin: 0 }}>
              <Link href={item.href}>
                <A href="/" key={index}>
                  {item.icon} {item.title}
                </A>
              </Link>
            </Menu.Item>
          );
        })}
        <Menu.Divider style={{ margin: "0 10px" }} />
        <Menu.Item
          key="logout"
          onClick={() => {
            logoutModal(handleLogout);
          }}
          style={{ padding: 0, margin: 0 }}
        >
          <Logout href="">
            <LogoutOutlined /> Logout
          </Logout>
        </Menu.Item>
      </Menu>
    </Container>
  );
};

export default index;
