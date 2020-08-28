import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Divider } from "antd";
import { useSelector } from "react-redux";

import { Container, Ul, Li, Username, Location } from "./style";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../constants/accountLinks";

const index = () => {
  const router = useRouter();
  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );
  const location = useSelector((state) => state.currentLocation.location);

  return (
    <Container>
      {username && <Username>{username}</Username>}
      {location && <Location>{location.city + ", " + location.state}</Location>}

      <Ul>
        {accountLinks.map((item, index) => {
          return (
            <Link href={item.href} shallow={true} key={index}>
              <Li active={router.query.view === item.view}>
                {item.icon} {item.title}
              </Li>
            </Link>
          );
        })}
        <Divider style={{ margin: "2px 0 0 0" }} />
        <Li
          key="logout"
          isLogout={true}
          onClick={() => {
            logoutModal(handleLogout);
          }}
        >
          <LogoutOutlined /> Logout
        </Li>
      </Ul>
    </Container>
  );
};

export default index;
