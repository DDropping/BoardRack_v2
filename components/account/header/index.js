import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { EditOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import axios from "axios";
import Image from "next/image";

import {
  Container,
  Banner,
  AvatarWrapper,
  EditButton,
  BackgroundMenu,
  MenuItem,
  BackgroundImageWrapper,
  BackgroundImage,
  MenuItemColor,
  ColorBox,
} from "./style";
import { UPDATE_USER_PROFILEBACKGROUND } from "../../../actions/types";
import baseUrl from "../../../utils/baseUrl";
import CustomAvatar from "../../avatar";
import backgroundImages from "../../../constants/accountBackgroundImages";
import colorCodes from "../../../constants/colorCodes";

const index = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const updateUserData = async (image, color) => {
    dispatch({
      type: UPDATE_USER_PROFILEBACKGROUND,
      payload: { color: color, image: image },
    });
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      //stringify the form items
      const body = JSON.stringify({
        profileBackground: { color, image },
      });

      const url = `${baseUrl}/api/auth/updateAccount`;
      await axios.patch(url, body, config);
    } catch (err) {
      console.log(err);
    }
  };

  const menu = (
    <BackgroundMenu>
      {backgroundImages.map((item, index) => {
        return (
          <MenuItem
            key={"image" + index}
            onClick={() => {
              updateUserData(item.src, null);
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout='fixed'
              width={460}
              height={60}
            />
          </MenuItem>
        );
      })}
      {colorCodes.map((item, index) => {
        return (
          <MenuItemColor
            key={"color" + index}
            onClick={() => {
              updateUserData(null, item.secondary);
            }}
          >
            <ColorBox color={item.secondary} />
          </MenuItemColor>
        );
      })}
    </BackgroundMenu>
  );
  return (
    <Container isMessageThreadView={router.query.thread}>
      {user && (
        <Banner
          bgColor={
            user.profileBackground.color
              ? user.profileBackground.color
              : colorCodes[user._id.charCodeAt(user._id.length - 1) % 20]
                  .secondary
          }
        >
          <EditButton>
            <Dropdown overlay={menu} trigger={["click"]}>
              <a
                className='ant-dropdown-link'
                onClick={(e) => e.preventDefault()}
              >
                <EditOutlined style={{ fontSize: "20px", color: "#cecece" }} />
              </a>
            </Dropdown>
          </EditButton>
          {user.profileBackground.image && (
            <BackgroundImageWrapper>
              <BackgroundImage
                alt='user account background image'
                src={user.profileBackground.image}
              />
            </BackgroundImageWrapper>
          )}
        </Banner>
      )}
      <AvatarWrapper>
        <CustomAvatar
          profileImage={user ? user.profileImage : null}
          userId={user ? user._id : null}
          username={user ? user.username : null}
          size={150}
          isEditable={true}
          isOutlined={true}
        />
      </AvatarWrapper>
    </Container>
  );
};

export default index;
