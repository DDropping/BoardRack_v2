import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LogoutOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import styled from "styled-components";

import { DEAUTH_USER } from "../../actions/types";
import navLinks from "../../constants/navLinks";
import logoutModal from "../logout";
import CustomAvatar from "../avatar";
import BadgeDot from "../badge/Dot";

const Container = styled.div`
  background-color: ${({ theme }) => theme.primaryWhite};
  box-shadow: 0 0 11px rgba(83, 68, 68, 0.2);
`;

const Ul = styled.ul`
  list-style-type: none;
`;

const Li = styled.li`
  cursor: pointer;
  padding: 10px;
  margin-bottom: 1px;
  transition: ${({ theme }) => theme.easeInOut};
  ${({ active, theme }) =>
    active && {
      backgroundColor: theme.backgroundBlueMenu,
      borderLeft: `2px solid ${theme.primaryBlue}`,
    }}
  &:hover {
    background-color: ${({ theme, isLogout }) =>
      isLogout ? theme.backgroundRedMenu : theme.backgroundBlueMenu};
    color: ${({ theme, isLogout }) =>
      isLogout ? theme.primaryRed : theme.primaryBlue};
    padding-left: 20px;
  }
`;

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const AccountMenu = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const notifications = useSelector((state) => state.auth.notifications);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  //sort nav items depending on if user is authenticated
  const navItems = navLinks.filter((navitem) => navitem.protected === isAuth);

  const handleLogout = () => {
    dispatch({ type: DEAUTH_USER });
    router.reload(window.location.pathname);
  };

  return (
    <Container>
      <Ul>
        <AvatarContainer
          key="account"
          style={{
            minHeight: "11rem",
            minWidth: "15rem",
            textAlign: "center",
            paddingTop: "1rem",
          }}
        >
          <Link href="/account?view=overview">
            <div>
              <CustomAvatar
                profileImage={user ? user.profileImage : null}
                userId={user ? user._id : null}
                username={user ? user.username : null}
                size={150}
              />
            </div>
          </Link>
        </AvatarContainer>

        {navItems.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <Li active={router.query.view === item.view}>
                <a>
                  {item.icon} {item.title}{" "}
                  {item.view === "messages" &&
                    notifications.messages.length > 0 && (
                      <BadgeDot
                        size={12}
                        red
                        content={notifications.messages.length}
                      />
                    )}
                </a>
              </Li>
            </Link>
          );
        })}
        <Divider style={{ margin: 0 }} />
        <Li
          isLogout={true}
          key="logout"
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

export default AccountMenu;
