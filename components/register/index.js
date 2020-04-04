import React from 'react';
import { Modal } from 'antd';

import RegisterForm from './RegisterForm';

const index = () => {
  return (
    <Modal
      title="Register"
      visible={false}
      onOk={() => console.log('modal')}
      onCancel={() => console.log('modal')}
      footer={null}
      zIndex={1100}
    >
      <RegisterForm />
    </Modal>
  );
};

export default index;
