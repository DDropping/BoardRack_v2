import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "antd";
import { useSelector } from "react-redux";

import { Container, A, Logout, Username, Location } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../constants/accountLinks";
import { theme } from "../../../pages/_app";

const index = () => {
  const router = useRouter();
  const username = useSelector((state) => state.auth.user.username);
  const location = useSelector((state) => state.currentLocation.location);

  return (
    <Container>
      {username && <Username>{username}</Username>}
      {location && <Location>{location.city + ", " + location.state}</Location>}

      <Menu>
        {accountLinks.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              style={{
                padding: 0,
                margin: "0 0 5px 0",
                backgroundColor:
                  router.query.view === item.view
                    ? theme.backgroundBlueMenu
                    : "transparent",
                borderRight:
                  router.query.view === item.view
                    ? `2px solid ${theme.primaryBlue}`
                    : "none",
                color:
                  router.query.view === item.view ? theme.primaryBlue : "none",
              }}
            >
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
          style={{ padding: 0, margin: " 5px 0 0 0" }}
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
