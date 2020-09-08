import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Divider } from "antd";
import { DownOutlined, RightOutlined } from "@ant-design/icons";

import { Container, Header, Ul, Li } from "./style";
import { DEAUTH_USER } from "../../../../actions/types";
import { LogoutOutlined } from "@ant-design/icons";
import accountLinks from "../../../../constants/accountLinks";
import logoutModal from "../../../logout";

const index = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isOpen, toggleIsOpen] = useState(false);
  const [menuSelected, setMenuSelected] = useState(
    router.query.view ? router.query.view : "overview"
  );

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
        {accountLinks.filter((item) => item.view === menuSelected)[0].icon}{" "}
        {accountLinks.filter((item) => item.view === menuSelected)[0].title}
      </Header>
      <Ul isOpen={isOpen}>
        {accountLinks.map((item, index) => {
          return (
            <Link href={item.href} shallow={true} key={index}>
              <Li
                active={router.query.view === item.view}
                onClick={() => {
                  toggleIsOpen(!isOpen);
                }}
              >
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
