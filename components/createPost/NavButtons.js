import React from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CANCEL_POST } from '../../actions/types';
import styled from 'styled-components';
import { Button, Modal } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';

import { publishPost } from '../../actions/publishPost';

const { confirm } = Modal;

const Container = styled.section`
  display: flex;
`;

const NavButtons = ({ step, handleStepChange }) => {
  const dispatch = useDispatch();
  const location = useSelector(state => state.currentLocation.location);
  const imgList = useSelector(state => state.imgUpload.imgList);
  const formData = useSelector(state => state.createPostForm);
  const isLoading = useSelector(state => state.createPostForm.isLoading);

  function handleCancelConfirm() {
    confirm({
      title: 'Cancel Post',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure you want to cancel this post?',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        dispatch({ type: CANCEL_POST });
        Router.push('/');
      }
    });
  }

  const handlePublish = () => {
    dispatch(publishPost(location, imgList, formData));
  };

  return (
    <Container>
      <Button
        onClick={handleCancelConfirm}
        type="danger"
        ghost
        style={{ margin: '0.5rem' }}
      >
        Cancel
      </Button>

      {step !== 0 && (
        <Button
          onClick={() => handleStepChange(step - 1)}
          style={{ marginRight: '5px' }}
          type="primary"
          ghost
          disabled={step < 1 ? true : false}
          style={{ margin: '0.5rem' }}
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
          style={{ margin: '0.5rem' }}
        >
          Next
          <RightOutlined />
        </Button>
      )}

      {step === 2 && (
        <Button
          onClick={() => handlePublish()}
          loading={isLoading}
          type="primary"
          disabled={step === 2 ? false : true}
          style={{ margin: '0.5rem' }}
        >
          Publish
        </Button>
      )}
    </Container>
  );
};

export default NavButtons;
