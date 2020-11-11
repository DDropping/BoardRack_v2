import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Divider } from "antd";
import { DownOutlined, RightOutlined, LogoutOutlined } from "@ant-design/icons";

import { Container, Header, Ul, Li } from "./style";
import { DEAUTH_USER } from "../../../../actions/types";
import accountLinks from "../../../../constants/accountLinks";
import logoutModal from "../../../logout";
import BadgeDot from "../../../badge/Dot";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, toggleIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState(
    router.query.view ? router.query.view : "overview"
  );
  const notifications = useSelector((state) => state.auth.notifications);

  useEffect(() => {
    setMenuSelected(router.query.view);
  }, [router.query.view]);

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
    router.reload(window.location.pathname);
  };

  return (
    <Container>
      <Header onClick={() => toggleIsOpen(!isOpen)}>
        {isOpen ? <RightOutlined /> : <DownOutlined />}{" "}
        {accountLinks.find((item) => item.view === menuSelected).icon}{" "}
        {accountLinks.find((item) => item.view === menuSelected).title}
      </Header>
      {isOpen && (
        <Ul>
          {accountLinks.map((item, index) => {
            return (
              <Link href={item.href} shallow={true} key={index}>
                <Li
                  active={router.query.view === item.view}
                  onClick={() => {
                    toggleIsOpen(!isOpen);
                  }}
                >
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
      )}
    </Container>
  );
};

export default index;
