import React from 'react';
import { Modal } from 'antd';

import LoginForm from './LoginForm';

const index = () => {
  return (
    <Modal
      title="Login"
      visible={true}
      onOk={() => console.log('modal')}
      onCancel={() => console.log('modal')}
      footer={null}
      zIndex={1100}
    >
      <LoginForm />
    </Modal>
  );
};

export default index;
