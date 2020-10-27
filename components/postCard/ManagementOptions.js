import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import axios from "axios";
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";

import baseURL from "../../utils/baseUrl";
import { DELETE_POST, UPDATE_USER_POSTS } from "../../actions/types";
import { ManagementContainer } from "./style";
import { successNotification, failNotification } from "../notifications";

const { confirm } = Modal;

const ManagementOptions = ({ postId, isVisible }) => {
  const dispatch = useDispatch();

  const deletePostConfirm = (postId) => {
    return confirm({
      title: "Delete Post",
      content: "Are you sure you want to delete this post?",
      okText: "Delete",
      okButtonProps: {
        danger: true,
      },
      onOk() {
        return (async function () {
          await handleDeletePost(postId);
        })();
      },
      onCancel() {},
    });
  };

  const hidePostConfirm = (postId, isVisible) => {
    return confirm({
      title: `${isVisible ? "Hide" : "Display"} post`,
      content: `Are you sure you want to make this post ${
        isVisible ? "hidden" : "visible to everyone"
      }?`,
      okText: `${isVisible ? "Hide" : "Unhide"}`,
      onOk() {
        return (async function () {
          await handleHidePost(postId);
        })();
      },
      onCancel() {},
    });
  };

  const handleDeletePost = async (postId) => {
    try {
      const url = `${baseURL}/api/posts/deletepost/${postId}`;
      await axios.delete(url);
      successNotification(
        "Post Deleted",
        "Your post has successfully been deleted",
        4.5
      );
      dispatch({ type: DELETE_POST, payload: postId });
    } catch (err) {
      failNotification(
        "Uhh Ohh...",
        "Something went wrong. We couldn't delete your post",
        4.5
      );
    }
  };

  const handleHidePost = async (postId) => {
    try {
      const url = `${baseURL}/api/posts/hidepost/${postId}`;
      const res = await axios.patch(url);
      successNotification(
        "Post Updated",
        `Your post is now ${res.data.isVisible ? "visible" : "hidden"}`,
        4.5
      );
      dispatch({ type: UPDATE_USER_POSTS, payload: res.data });
    } catch (err) {
      failNotification(
        "Uhh Ohh...",
        "Something went wrong. We couldn't update your post visibility",
        4.5
      );
    }
  };

  return (
    <ManagementContainer>
      <Button style={{ marginRight: "5px" }}>
        <EditOutlined />
        Edit
      </Button>
      <Button onClick={() => hidePostConfirm(postId, isVisible)}>
        {isVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        {isVisible ? "Hide" : "Hidden"}
      </Button>

      <div style={{ flex: 1 }} />

      <Button danger onClick={() => deletePostConfirm(postId)}>
        <DeleteOutlined />
      </Button>
    </ManagementContainer>
  );
};

export default ManagementOptions;
