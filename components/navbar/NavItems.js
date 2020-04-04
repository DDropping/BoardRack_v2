import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { TOGGLE_LOGIN, TOGGLE_REGISTER } from '../../actions/types';

const Ul = styled.ul`
  color: blue;
  display: inline-block;
  vertical-align: top;
  @media (max-width: ${props => props.theme.sm}) {
    display: none;
  }
`;

const Li = styled.li`
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  margin: 0 0.1rem;
  display: inline-block;
  cursor: pointer;
  ${({ active, theme }) =>
    active && `border-bottom: 2px solid ${theme.primaryBlue};`}
  &:hover {
    background-color: ${({ theme }) => theme.backgroundBlueMenu};
    border-bottom: 2px solid ${({ theme }) => theme.primaryBlue};
    a {
      color: ${({ theme }) => theme.primaryBlue};
    }
  }
`;

const NavItems = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isLogin = useSelector(state => state.overlays.isLogin);
  const isRegister = useSelector(state => state.overlays.isRegister);
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Ul>
      {isAuth && (
        <Link href={'/createpost'}>
          <Li active={isActive('/createpost') && !isLogin && !isRegister}>
            <a>Create Post</a>
          </Li>
        </Link>
      )}
      {!isAuth && (
        <Li onClick={() => dispatch({ type: TOGGLE_LOGIN, payload: true })}>
          <a>Create Post</a>
        </Li>
      )}
      {isAuth && (
        <Link href={'/account'}>
          <Li active={isActive('/account') && !isLogin && !isRegister}>
            <a>My Account</a>
          </Li>
        </Link>
      )}
      {!isAuth && (
        <Li
          active={isLogin}
          onClick={() => dispatch({ type: TOGGLE_LOGIN, payload: true })}
        >
          <a>Login</a>
        </Li>
      )}
      {!isAuth && (
        <Li
          active={isRegister}
          onClick={() => dispatch({ type: TOGGLE_REGISTER, payload: true })}
        >
          <a>Register</a>
        </Li>
      )}
    </Ul>
  );
};

export default NavItems;
