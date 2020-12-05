import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styled from "styled-components";

import { TOGGLE_LOGIN, TOGGLE_REGISTER } from "../../actions/types";
import Menu from "./AccountMenu";
import BadgeDot from "../badge/Dot";

const Ul = styled.ul`
  color: blue;
  display: inline-block;
  vertical-align: top;
  @media (max-width: ${(props) => props.theme.sm}) {
    display: none;
  }
`;

const Li = styled.li`
  transition: ${({ theme }) => theme.easeInOut};
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  margin: 0 0.1rem;
  display: inline-block;
  cursor: pointer;
  font-weight: 600;
  ${({ active, theme }) =>
    active && `border-bottom: 2px solid ${theme.primaryBlue};`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-bottom: 2px solid ${({ theme }) => theme.primaryBlue};
  }
`;

const LiText = styled.div`
  color: ${({ theme }) => theme.primaryBlack};
  &:hover {
    color: ${({ theme }) => theme.primaryBlue};
  }
`;

const NavItems = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const notifications = useSelector((state) => state.auth.notifications);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const isLogin = useSelector((state) => state.overlays.isLogin);
  const isRegister = useSelector((state) => state.overlays.isRegister);
  const router = useRouter();

  function isActive(route) {
    if (!router) {
      return false;
    }
    return route === router.pathname;
  }

  return (
    <Ul>
      {isAuth && (
        <Link href={"/createpost"}>
          <Li active={isActive("/createpost") && !isLogin && !isRegister}>
            <LiText>Create Post</LiText>
          </Li>
        </Link>
      )}
      {!isAuth && (
        <Li onClick={() => dispatch({ type: TOGGLE_LOGIN, payload: true })}>
          <LiText>Create Post</LiText>
        </Li>
      )}
      {isAuth && (
        <Dropdown overlay={<Menu />} overlayStyle={{ zIndex: 1000 }}>
          <Li active={isActive("/account") && !isLogin && !isRegister}>
            <LiText
              className='ant-dropdown-link'
              onClick={(e) => e.preventDefault()}
            >
              {user &&
                notifications.messages.length >
                  0 /* add more notification types here */ && (
                  <BadgeDot
                    size={12}
                    red
                    content={notifications.messages.length}
                  /> /* add more notification types here */
                )}{" "}
              {user ? user.username : "My Account"} <DownOutlined />
            </LiText>
          </Li>
        </Dropdown>
      )}
      {!isAuth && (
        <Li
          active={isLogin}
          onClick={() => dispatch({ type: TOGGLE_LOGIN, payload: true })}
        >
          <LiText>Login</LiText>
        </Li>
      )}
      {!isAuth && (
        <Li
          active={isRegister}
          onClick={() => dispatch({ type: TOGGLE_REGISTER, payload: true })}
        >
          <LiText>Register</LiText>
        </Li>
      )}
    </Ul>
  );
};

export default NavItems;
