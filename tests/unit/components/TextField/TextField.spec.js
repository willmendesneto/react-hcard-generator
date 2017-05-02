import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import TextField from '../../../../src/components/TextField';
import sinon from 'sinon';

describe('TextField component', () => {
  let callback, textfield;

  before(() => {
    callback = sinon.spy();
    textfield = shallow(
      <TextField
        onFieldUpdate={callback}
        label="My Label"
        value="test"
      />);
  });

  it('should render the label', () => {
    expect(textfield.find('.label').text()).to.eql('My Label');
  });

  it('should NOT run a given function via a onClick prop', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the given value into the input', () => {
    expect(textfield.find('.input').props().value).to.eql('test');
  });

  describe('When textfield value is changed', () => {
    before(() => {
      textfield.find('input').simulate('change', { target: { value: 'another test'}});
    });

    it('should runs a given function via a onChange prop', () => {
      expect(callback.called).to.eql(true);
    });
  });

});
