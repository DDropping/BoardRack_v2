/*
Avatar component
    profileImage: image url used as avatar
    userId: used to generate avatar picture color scheme
    username: displays first letter of username as default
    size: height and width of avatar in px
    isEditable: displays edit button onHover
    isOutlined: displays white boarder around avatar
*/

import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

import {
  Container,
  EditButton,
  UploadImageButton,
  ProfileImageWrapper,
} from "./style";
import colorCodes from "../../constants/colorCodes";
import ImageCroper from "../imageCrop/modal";
import DefaultAvatar from "./DefaultAvatar";

const index = ({
  profileImage,
  userId,
  username,
  size,
  isEditable,
  isOutlined,
}) => {
  if (!userId || !username) {
    return <DefaultAvatar size={size} isOutlined={isOutlined} />;
  }

  const colorInt = userId.charCodeAt(userId.length - 1) % 20;
  const [isCropModal, toggleCropModal] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const closeModal = () => {
    toggleCropModal(false);
    setImageFile(null);
  };

  const handleUpload = (file) => {
    if (file) {
      setImageFile(URL.createObjectURL(file));
      toggleCropModal(true);
    }
  };

  return (
    <Container
      primary={!profileImage ? colorCodes[colorInt].primary : null}
      secondary={!profileImage ? colorCodes[colorInt].secondary : null}
      isOutlined={isOutlined}
      size={size}
    >
      {isEditable && (
        <EditButton size={size}>
          <EditOutlined />
          <UploadImageButton
            id="upload-image"
            type="file"
            accept="image/*"
            onChange={(event) => handleUpload(event.target.files[0])}
          />
        </EditButton>
      )}
      <ImageCroper
        file={imageFile}
        isOpen={isCropModal}
        closeModal={closeModal}
      />
      {profileImage ? (
        <ProfileImageWrapper src={profileImage} />
      ) : (
        username.charAt(0)
      )}
    </Container>
  );
};

export default index;
