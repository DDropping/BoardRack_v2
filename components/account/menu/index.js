import React from "react";
import Link from "next/link";
import { Menu } from "antd";
import { useSelector } from "react-redux";

import { Container, A, Logout, Username, Location } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../constants/accountLinks";

const index = () => {
  const username = useSelector((state) => state.auth.user.username);
  const location = useSelector((state) => state.currentLocation.location);

  return (
    <Container>
      <Username>{username}</Username>
      <Location>{location.city + ", " + location.state}</Location>

      <Menu>
        {accountLinks.map((item, index) => {
          return (
            <Menu.Item key={index} style={{ padding: 0, margin: 0 }}>
              <Link href={item.href} shallow={true}>
                <A href="" key={index}>
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
