import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Avatar, Menu } from "antd";
import styled from "styled-components";

import { DEAUTH_USER } from "../../actions/types";
import navDrawerLinks from "../../constants/navDrawerLinks";
import logoutModal from "../logout";

const Container = styled.div`
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
  }
`;

const A = styled.a`
  padding: 0 0.5rem;
  transition: ${({ theme }) => theme.easeInOut};
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
    border-left: 2px solid ${theme.primaryBlue}; 
    padding: 1rem;`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryBlue};
    color: ${({ theme }) => theme.primaryBlue};
    padding-left: 1rem;
  }
`;

const Logout = styled.div`
  padding: 0 0.5rem;
  transition: ${({ theme }) => theme.easeInOut};
  &:hover {
    background-color: ${({ theme }) => theme.backgroundRedMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryRed};
    color: ${({ theme }) => theme.primaryRed};
    padding-left: 1rem;
  }
`;

const AccountMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLogout = useSelector((state) => state.overlays.isLogout);
  const router = useRouter();

  //sort nav items depending on if user is authenticated
  const navItems = navDrawerLinks.filter(
    (navitem) => navitem.protected === isAuth
  );

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
  };

  return (
    <Container>
      <Menu style={{ boxShadow: "0 0 11px rgba(83, 68, 68, 0.2)" }}>
        <Menu.Item
          key="account"
          style={{
            minHeight: "11rem",
            minWidth: "15rem",
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          <Link href="/account?view=overview">
            <Avatar
              size={150}
              style={{ backgroundColor: "#4878a9" }}
              icon={<UserOutlined style={{ fontSize: "6rem" }} />}
            />
          </Link>
        </Menu.Item>

        {navItems.map((item, index) => {
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
        <Menu.Divider />
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

export default AccountMenu;
