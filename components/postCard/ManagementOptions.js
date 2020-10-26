import React from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "antd";
import axios from "axios";
import {
  DeleteOutlined,
  EditOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";

import baseURL from "../../utils/baseUrl";
import { DELETE_POST } from "../../actions/types";
import { ManagementContainer } from "./style";
import { successNotification, failNotification } from "../notifications";

const { confirm } = Modal;

const ManagementOptions = ({ postId }) => {
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

  return (
    <ManagementContainer>
      <Button style={{ marginRight: "5px" }}>
        <EditOutlined />
        Edit
      </Button>
      <Button>
        <EyeInvisibleOutlined />
        Hide
      </Button>

      <div style={{ flex: 1 }} />

      <Button danger onClick={() => deletePostConfirm(postId)}>
        <DeleteOutlined />
      </Button>
    </ManagementContainer>
  );
};

export default ManagementOptions;
