import React from 'react';
import { notification, Icon, Button } from 'antd';

import { store } from '../../store';
import { updateUserLocation } from '../../actions/location';

export const UpdateDefaultLocationNotification = body => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button
      type="primary"
      size="small"
      onClick={() => {
        notification.close(key);
        store.dispatch(updateUserLocation(body));
      }}
    >
      Confirm
    </Button>
  );
  notification.open({
    top: 65,
    message: 'Update Default Location',
    description: 'Would you like to set this as your default location?',
    duration: 10,
    btn,
    key
  });
};
