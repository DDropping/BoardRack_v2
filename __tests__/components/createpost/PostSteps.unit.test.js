import React from 'react';
import { shallow } from 'enzyme';

import PostSteps from '@components/createPost/PostSteps';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<PostSteps />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a steps bar', () => {
  expect(wrapped.find('Steps').length).toBe(1);
});

it('has three steps', () => {
  expect(wrapped.find('Step').length).toBe(3);
});
