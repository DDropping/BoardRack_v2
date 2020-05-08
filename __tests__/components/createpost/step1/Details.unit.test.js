import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Details from '@components/createpost/step1/Details';
import { initializeStore } from '../../../../store';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
});

let store, wrapper;
const initialState = {};
store = initializeStore(initialState);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <Details />
    </Provider>
  );
});

it('has 5 rows', () => {
  expect(wrapper.find('Row').length).toBe(5);
});
