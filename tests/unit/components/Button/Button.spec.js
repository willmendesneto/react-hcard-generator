import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Button from '../../../../src/components/Button';
import sinon from 'sinon';

describe('Button component', () => {
  describe('When button is clicked', () => {
    let callback;

    before(() => {
      callback = sinon.spy();
      const button = shallow(<Button onClick={callback} />);
      button.simulate('click');
    });

    it('should runs a given function via a onClick prop', () => {
      expect(callback.called).to.eql(true);
    });
  });
});
