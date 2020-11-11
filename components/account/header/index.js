import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { EditOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

import {
  Container,
  Banner,
  AvatarWrapper,
  EditButton,
  BackgroundMenu,
  MenuItem,
  BackgroundImage,
  MenuItemColor,
  ColorBox,
} from "./style";
import CustomAvatar from "../../avatar";
import backgroundImages from "../../../constants/accountBackgroundImages";
import colorCodes from "../../../constants/colorCodes";

const index = () => {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const [BgImage, setBgImage] = useState("/images/accountBackgrounds/bg4.jpg");
  const [BgColor, setBgColor] = useState(null);

  const handleBackgroundChange = (image, color) => {
    if (image) {
      setBgImage(image);
      setBgColor(null);
    }
    if (color) {
      setBgColor(color);
      setBgImage(null);
    }
  };

  const menu = (
    <BackgroundMenu>
      {backgroundImages.map((item) => {
        return (
          <MenuItem
            onClick={() => {
              handleBackgroundChange(item.src, null);
            }}
          >
            <BackgroundImage alt={item.alt} src={item.src} />
          </MenuItem>
        );
      })}
      {colorCodes.map((item) => {
        return (
          <MenuItemColor
            onClick={() => {
              handleBackgroundChange(null, item.secondary);
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
      <Banner bgColor={BgColor}>
        <EditButton>
          <Dropdown overlay={menu} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              <EditOutlined style={{ fontSize: "20px", color: "#cecece" }} />
            </a>
          </Dropdown>
        </EditButton>
        {BgImage && <img alt="user account background image" src={BgImage} />}
      </Banner>
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
