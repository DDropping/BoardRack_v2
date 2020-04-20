import React from 'react';
import { shallow } from 'enzyme';

import Details from '../Details';

let wrapped;
beforeEach(() => {
  wrapped = shallow(<Details />);
});

it('has a form', () => {
  wrapped = shallow(<Details />);
  expect(wrapped.find('Form').length).toBe(1);
});
