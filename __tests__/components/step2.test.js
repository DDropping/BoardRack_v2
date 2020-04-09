import * as React from 'react';
import { mount } from 'enzyme';
import Step2 from '../../components/createPost/step2';

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function() {
      const wrap = mount(<Step2 />);
      expect(wrap.find('div').text()).toBe('Step 2');
    });
  });
});
