import React from 'react';
import { shallow } from 'enzyme';

import Policy from '@components/footer/Policy';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<Policy />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a list of policies', () => {
  expect(wrapped.find('ul').length).toBe(1);
});
