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

const { confirm } = Modal;

const Container = styled.section`
  display: flex;
`;

const NavButtons = ({ step, handleStepChange }) => {
  const dispatch = useDispatch();

  function cancelConfirm() {
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

  return (
    <Container>
      <Button
        onClick={cancelConfirm}
        type="danger"
        ghost
        style={{ margin: '1rem' }}
      >
        Cancel
      </Button>

      <Button
        onClick={() => handleStepChange(step - 1)}
        style={{ marginRight: '5px' }}
        type="primary"
        ghost
        disabled={step < 1 ? true : false}
        style={{ margin: '1rem' }}
      >
        <LeftOutlined />
        Previous
      </Button>

      <span style={{ flex: 1 }} />

      <Button
        onClick={() => handleStepChange(step + 1)}
        type="primary"
        ghost
        disabled={step > 1 ? true : false}
        style={{ margin: '1rem' }}
      >
        Next
        <RightOutlined />
      </Button>

      <Button
        onClick={() => console.log('publish')}
        type="primary"
        disabled={step === 2 ? false : true}
        style={{ margin: '1rem' }}
      >
        Publish
      </Button>
    </Container>
  );
};

export default NavButtons;
