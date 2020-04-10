import React from 'react';
import { Modal } from 'antd';

const { confirm } = Modal;

const index = handleLogout => {
  return confirm({
    title: 'Logout',
    content: 'Are you sure you want to log out?',
    onOk() {
      handleLogout();
    },
    onCancel() {}
  });
};

export default index;
