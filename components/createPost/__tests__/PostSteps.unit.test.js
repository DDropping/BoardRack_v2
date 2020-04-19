import React from 'react';
import { shallow } from 'enzyme';

import PostSteps from '../PostSteps';

// let wrapped;
// beforeEach(() => {
//  wrapped = shallow(<Details />);
// });

// afterEach(() => {
//   wrapped.unmount();
// });

it('has a form', () => {
  const wrapped = shallow(<PostSteps />);

  expect(wrapped.find('Steps').length).toBe(1);
});
