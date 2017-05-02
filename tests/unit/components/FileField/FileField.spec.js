import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FileField from '../../../../src/components/FileField';
import sinon from 'sinon';

describe('FileField component', () => {
  let callback, fileField;

  before(() => {
    callback = sinon.spy();
    fileField = shallow(
      <FileField
        label="Upload Avatar"
        handleFile={callback}
      />);
  });

  it('should render the a button component', () => {
    expect(fileField.find('Button').length).to.eql(1);
  });

  it('should runs a given function via a onClick prop', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the given value into the input', () => {
    expect(fileField.props().handleFile).to.eql(undefined);
    expect(fileField.props().handleFile).to.eql(undefined);
  });

  describe('When FileField input is changed', () => {
    before(() => {
      fileField.find('.input').simulate('change');
    });

    it('should runs a given function via a onChange prop', () => {
      expect(callback.called).to.eql(true);
    });
  });

});
