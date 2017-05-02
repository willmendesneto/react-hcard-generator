
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardField from '../../../../src/components/HCardField';

describe('HCardField component', () => {
  let hcardField;

  before(() => {
    hcardField = shallow(
      <HCardField
        fieldClass={'field-class'}
        text={'My text'}
      />
    );
  });

  it('should renders the field content with the `fieldClass` className', () => {
    expect(hcardField.find('.field-class.field').text()).to.eql('My text');
  });

  it('should render hCard label if component did NOT receive `labelTex` information', () => {
    expect(hcardField.find('HCardLabel').length).to.eql(0);
  });

  describe('When component receives `labelText` information', () => {
    before(() => {
      hcardField.setProps({ labelText: 'dummy content'});
    });

    it('should render hCard label if component receive `labelTex` information', () => {
      expect(hcardField.find('HCardLabel').length).to.eql(1);
    });
  });

});
