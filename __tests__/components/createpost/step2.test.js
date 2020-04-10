import React from 'react';
import { shallow } from 'enzyme';
import Step2 from '@components/createPost/step2';
import Dimensions from '@components/createPost/step2/Dimensions';

it('shows a Dimensions box', () => {
  const wrapped = shallow(<Step2 />);

  expect(wrapped.find(Dimensions).length).toEqual(1);
});
