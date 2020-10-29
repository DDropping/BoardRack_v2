import React from "react";
import Modal from "react-modal";
import { useRouter } from "next/router";

import "./react-modal-custom.less";
import PostPage from "../postPage";
import Toolbar from "./Toolbar";

Modal.setAppElement("#__next");

const index = ({ quickData }) => {
  const router = useRouter();

  function closeModal() {
    router.push("/");
  }

  const customStyles = {
    overlay: { zIndex: 9999 },
    content: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: "100%",
      margin: "0 auto",
      borderRadius: 0,
      padding: 0,
      maxWidth: "1000px",
    },
  };

  return (
    <Modal
      isOpen={!!router.query.postId}
      onRequestClose={() => closeModal()}
      style={customStyles}
      bodyOpenClassName={"ReactModal__Body--open"}
    >
      <Toolbar postId={router.query.postId} />
      <PostPage
        postId={router.query.postId}
        isModalView={true}
        quickData={quickData.find(
          (element) => element._id === router.query.postId
        )}
      />
    </Modal>
  );
};

export default index;
