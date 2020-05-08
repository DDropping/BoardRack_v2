import React from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { TOGGLE_REGISTER } from '../../actions/types';
import RegisterForm from './RegisterForm';

const index = () => {
  const dispatch = useDispatch();
  const isVisible = useSelector(state => state.overlays.isRegister);
  return (
    <Modal
      title="Register"
      visible={isVisible}
      onOk={() => dispatch({ type: TOGGLE_REGISTER, payload: false })}
      onCancel={() => dispatch({ type: TOGGLE_REGISTER, payload: false })}
      footer={null}
      zIndex={1100}
    >
      <RegisterForm />
    </Modal>
  );
};

export default index;
