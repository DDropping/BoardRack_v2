import React, { useState } from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

import './react-modal-custom.less';
import PostPage from '../postPage';

Modal.setAppElement('#__next');

const index = ({ quickData }) => {
  const router = useRouter();
  function closeModal() {
    router.push('/');
  }

  const customStyles = {
    overlay: { zIndex: 9999 },
  };

  return (
    <Modal
      isOpen={!!router.query.postId}
      onRequestClose={() => closeModal()}
      style={customStyles}
      bodyOpenClassName={'ReactModal__Body--open'}
    >
      <PostPage
        quickData={quickData.find(
          (element) => element._id === router.query.postId
        )}
      />
    </Modal>
  );
};

export default index;
