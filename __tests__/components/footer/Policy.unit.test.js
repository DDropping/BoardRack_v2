import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Policy from '@components/footer/Policy';
import { initializeStore } from '../../../store';

let store, wrapper;
const initialState = {};
store = initializeStore(initialState);

it('has a list of policies', () => {
  wrapper = mount(
    <Provider store={store}>
      <Policy />
    </Provider>
  );
  expect(wrapper.find('ul').length).toBe(1);
});
