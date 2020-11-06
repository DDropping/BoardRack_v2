import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { CANCEL_POST } from "../../actions/types";
import styled from "styled-components";
import { Button, Modal } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { publishPost } from "../../actions/publishPost";

const { confirm } = Modal;

const Container = styled.section`
  display: flex;
`;

const NavButtons = ({ step, handleStepChange }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const location = useSelector((state) => state.currentLocation.location);
  const imgList = useSelector((state) => state.imgUpload.imgList);
  const formData = useSelector((state) => state.createPostForm);
  const isLoading = useSelector((state) => state.createPostForm.isLoading);
  const isMapLoading = useSelector(
    (state) => state.currentLocation.isMapLoading
  );

  function handleCancelConfirm() {
    confirm({
      title:
        router.pathname === "/createpost" ? "Cancel Post" : "Cancel Update",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to cancel?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch({ type: CANCEL_POST });
        router.push("/");
      },
    });
  }

  const redirectToAccount = () => {
    router.push("/account?view=overview");
  };

  const handlePublish = () => {
    dispatch(
      publishPost(
        location,
        imgList,
        formData,
        redirectToAccount,
        router.query.postId
      )
    );
  };

  return (
    <Container>
      <Button
        onClick={handleCancelConfirm}
        type="danger"
        ghost
        style={{ margin: "0.5rem" }}
      >
        Cancel
      </Button>

      {step !== 0 && (
        <Button
          onClick={() => handleStepChange(step - 1)}
          style={{ marginRight: "5px" }}
          type="primary"
          ghost
          disabled={step < 1 ? true : false}
          style={{ margin: "0.5rem" }}
        >
          <LeftOutlined />
          Previous
        </Button>
      )}

      <span style={{ flex: 1 }} />

      {step !== 2 && (
        <Button
          onClick={() => handleStepChange(step + 1)}
          type="primary"
          ghost
          disabled={step > 1 ? true : false}
          style={{ margin: "0.5rem" }}
        >
          Next
          <RightOutlined />
        </Button>
      )}

      {step === 2 && (
        <Button
          onClick={() => handleStepChange(3)}
          type="primary"
          disabled={step !== 2}
          style={{ margin: "0.5rem" }}
          disabled={
            !formData.title ||
            !formData.price ||
            !location.lat ||
            !location.lng ||
            isMapLoading
          }
        >
          Preview
          <RightOutlined />
        </Button>
      )}

      {step === 3 && (
        <Button
          onClick={() => handlePublish()}
          loading={isLoading}
          type="primary"
          disabled={
            !formData.title ||
            !formData.price ||
            !location.lat ||
            !location.lng ||
            isMapLoading
          }
          style={{ margin: "0.5rem" }}
        >
          {router.pathname.includes("/editpost/") && "Update"}
          {router.pathname === "/createpost" && "Publish"}
        </Button>
      )}
    </Container>
  );
};

export default NavButtons;
