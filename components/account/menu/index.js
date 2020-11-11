import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Divider } from "antd";

import { Container, Ul, Li, Username, Location } from "./style";
import { DEAUTH_USER } from "../../../actions/types";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../constants/accountLinks";
import logoutModal from "../../logout";
import BadgeDot from "../../badge/Dot";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const username = useSelector((state) =>
    state.auth.user ? state.auth.user.username : null
  );
  const location = useSelector((state) => state.currentLocation.location);
  const notifications = useSelector((state) => state.auth.notifications);

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
    router.reload(window.location.pathname);
  };

  return (
    <Container>
      {username && <Username>{username}</Username>}
      {location && <Location>{location.city + ", " + location.state}</Location>}

      <Ul>
        {accountLinks.map((item, index) => {
          return (
            <Link href={item.href} shallow={true} key={index}>
              <Li active={router.query.view === item.view}>
                {item.icon} {item.title + " "}
                {item.view === "messages" &&
                  notifications.messages.length > 0 && (
                    <BadgeDot
                      size={12}
                      red
                      content={notifications.messages.length}
                    />
                  )}
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
