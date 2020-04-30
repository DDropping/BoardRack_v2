import React from "react";
import Link from "next/link";
import { Drawer } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  PlusOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import {
  TOGGLE_LOGIN,
  TOGGLE_REGISTER,
  DEAUTH_USER,
} from "../../actions/types";
import navDrawerLinks from "../../constants/navDrawerLinks";
import logoutModal from "../logout";

const Img = styled.img`
  width: 80%;
  padding: 1rem 0 1rem 1rem;
  cursor: pointer;
`;

const Li = styled.li`
  transition: all 0.2s ease-in-out;
  display: block;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 0.25rem;
  ${({ active, theme }) =>
    active &&
    `background-color: ${theme.backgroundBlueMenu}; 
    `}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryBlue};
    padding-left: 1.5rem;
    a {
      color: ${({ theme }) => theme.primaryBlue};
    }
  }
`;

const Logout = styled.div`
  transition: all 0.2s ease-in-out;
  display: block;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 0.25rem;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundRedMenu};
    border-left: 2px solid ${({ theme }) => theme.primaryRed};
    padding-left: 1.5rem;
    a {
      color: ${({ theme }) => theme.primaryRed};
    }
  }
`;

const DrawerMenu = ({ isDrawer, handleDrawer }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLogin = useSelector((state) => state.overlays.isLogin);
  const isRegister = useSelector((state) => state.overlays.isRegister);
  const isLogout = useSelector((state) => state.overlays.isLogout);
  const router = useRouter();

  //sort nav items depending on if user is authenticated
  const navItems = navDrawerLinks.filter(
    (navitem) => navitem.protected === isAuth
  );

  function isActive(route) {
    if (!router) {
      return false;
    }
    return route === router.pathname;
  }

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
  };

  return (
    <Drawer
      placement="right"
      closable
      onClose={() => handleDrawer(false)}
      visible={isDrawer}
      bodyStyle={{ padding: 0 }}
    >
      <Link href="/">
        <Img
          src="/images/br_logo_black.png"
          alt="boardrack logo"
          onClick={() => handleDrawer(false)}
        />
      </Link>
      <ul>
        {isAuth && (
          <Link href={"/createpost"}>
            <Li
              active={isActive("/createpost") && !isLogin && !isRegister}
              onClick={() => handleDrawer(false)}
            >
              <a className="create-post-link">
                <PlusOutlined /> Create Post
              </a>
            </Li>
          </Link>
        )}
        {!isAuth && (
          <Li
            active={isActive("/createpost") && !isLogin && !isRegister}
            onClick={() => {
              handleDrawer(false);
              dispatch({ type: TOGGLE_LOGIN, payload: true });
            }}
          >
            <a className="create-post-link-disabled">
              <PlusOutlined /> Create Post
            </a>
          </Li>
        )}
        {navItems.map((navItem, index) => {
          return (
            <Link href={navItem.href} key={index}>
              <Li
                active={isActive(navItem.href) && !isLogin && !isRegister}
                onClick={() => handleDrawer(false)}
              >
                <a>
                  {navItem.icon} {navItem.title}
                </a>
              </Li>
            </Link>
          );
        })}
        {!isAuth && (
          <Li
            active={isLogin}
            onClick={() => {
              handleDrawer(false);
              dispatch({ type: TOGGLE_LOGIN, payload: true });
            }}
          >
            <a className="login-link">
              <UserOutlined /> Login
            </a>
          </Li>
        )}
        {!isAuth && (
          <Li
            active={isRegister}
            onClick={() => {
              handleDrawer(false);
              dispatch({ type: TOGGLE_REGISTER, payload: true });
            }}
          >
            <a className="register-link">
              <UserAddOutlined /> Register
            </a>
          </Li>
        )}
        {isAuth && (
          <Logout
            active={isLogout}
            onClick={() => {
              handleDrawer(false);
              logoutModal(handleLogout);
            }}
          >
            <a className="logout-link">
              <LogoutOutlined /> Logout
            </a>
          </Logout>
        )}
      </ul>
    </Drawer>
  );
};

export default DrawerMenu;
