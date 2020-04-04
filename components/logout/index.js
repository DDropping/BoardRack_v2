import { Modal, Button } from 'antd';

const { confirm } = Modal;

function logoutModal() {
  confirm({
    title: 'Logout',
    content: 'Are you sure you want to log out?',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log('Oops errors!'));
    },
    onCancel() {}
  });
}

export default logoutModal;
