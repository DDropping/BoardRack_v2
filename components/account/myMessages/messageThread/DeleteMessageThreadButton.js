import React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Button, Modal } from "antd";
import axios from "axios";
import { ExclamationCircleOutlined } from "@ant-design/icons";

import baseUrl from "../../../../utils/baseUrl";
import { successNotification, failNotification } from "../../../notifications";

const DeleteMessageThreadButton = ({ messageThreadId }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDeleteMessageThread = async () => {
    try {
      //delete message thread in db
      const url = `${baseUrl}/api/messages/deletemessagethread/${messageThreadId}`;
      await axios.patch(url);
      //redirect user
      router.push("/account?view=messages");
      //delete message thread in store
      dispatch({ type: "DELETE_MESSAGE_THREAD", payload: messageThreadId });
      //success notification
      successNotification(
        "Conversation Deleted",
        "The conversation has been deleted",
        4.5
      );
    } catch (err) {
      failNotification(
        "Uhh Ohh...",
        "Something went wrong. We couldn't delete the conversation",
        4.5
      );
    }
  };

  const deleteMessageThreadConfirm = () => {
    return Modal.confirm({
      title: "Delete Conversation",
      icon: <ExclamationCircleOutlined />,
      content: "Are you sure you want to delete this conversation?",
      okText: "Delete",
      onOk() {
        return (async function () {
          await handleDeleteMessageThread();
        })();
      },
      okButtonProps: {
        danger: true,
      },
      cancelText: "Cancel",
    });
  };

  return (
    <Button danger onClick={deleteMessageThreadConfirm}>
      Delete Conversation
    </Button>
  );
};

export default DeleteMessageThreadButton;
