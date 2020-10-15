import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { UPDATE_USER_PROFILE_IMAGE } from "../../../actions/types";
import Modal from "react-modal";
import Cropper from "react-easy-crop";
import axios from "axios";
import { Button } from "antd";

import { Container, Options, Title } from "./style";
import baseUrl from "../../../utils/baseUrl";
import getCroppedImg from "./cropImage";
import uploadFiletoBucket from "../../../utils/uploadFileToBucket";

const customStyles = {
  content: {
    margin: "auto",
    maxWidth: "800px",
    maxHeight: "800px",
    padding: 0,
  },
};

Modal.setAppElement("#__next");

const index = ({ file, isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  //upload cropped image to S3 bucket and update store
  const uploadCroppedImage = async () => {
    try {
      setMessage(null);
      setLoading(true);

      const croppedImage = await getCroppedImg(
        file,
        croppedAreaPixels,
        rotation
      );

      const fileUrl = await uploadFiletoBucket(croppedImage);
      await updateUserData(fileUrl);
      await dispatch({ type: UPDATE_USER_PROFILE_IMAGE, payload: fileUrl });
      setMessage("Profile Image Updated!");
      setTimeout(() => {
        closeModal();
        setMessage(null);
      }, 2000);
    } catch (err) {
      console.log(err);
      setMessage("Image Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  //helper function to make patch request to DB
  const updateUserData = async (fileUrl) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const userData = {
      profileImage: fileUrl,
    };

    const body = JSON.stringify(userData);

    const url = `${baseUrl}/api/auth/updateAccount`;
    const res = await axios.patch(url, body, config).catch(() => {
      setMessage("Could not update profile image at this time");
    });

    console.log(res);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <Options>
        <Button danger onClick={closeModal}>
          Cancel
        </Button>
        <Title>{message ? message : "Edit Profile Image"}</Title>
        <Button type="primary" onClick={uploadCroppedImage} loading={isLoading}>
          Save
        </Button>
      </Options>
      {isOpen && (
        <Container>
          <Cropper
            image={file}
            crop={crop}
            zoom={zoom}
            cropShape="round"
            showGrid={false}
            aspect={1 / 1}
            rotation={rotation}
            onRotationChange={setRotation}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </Container>
      )}
    </Modal>
  );
};

export default index;
