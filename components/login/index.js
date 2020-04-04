import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { TOGGLE_LOGIN } from '../../actions/types';
import LoginForm from './LoginForm';

const index = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlays.isLogin);
  return (
    <Modal
      title="Login"
      visible={isVisible}
      onOk={() => dispatch({ type: TOGGLE_LOGIN, payload: false })}
      onCancel={() => dispatch({ type: TOGGLE_LOGIN, payload: false })}
      footer={null}
      zIndex={1100}
    >
      <LoginForm />
    </Modal>
  );
};

export default index;
