import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import PersonalDetailsFields from '../../../../src/components/PersonalDetailsFields';

describe('PersonalDetailsFields component', () => {
  let personalDetailsFields, callback;

  before(() => {
    callback = sinon.spy();
    personalDetailsFields = shallow(
      <PersonalDetailsFields
        givenName={''}
        surname={''}
        email={''}
        phone={''}
        onFieldUpdate={callback}
      />
    );
  });

  it('should NOT run a given function via a onClick prop by default', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the internal components', () => {
    expect(personalDetailsFields.find('Subtitle').length).to.eql(1);
    expect(personalDetailsFields.find('TextField').length).to.eql(4);
  });

  it('should render the internal components', () => {
    expect(personalDetailsFields.find('Subtitle').node.props.children).to.eql('Personal details');
  });

  it('should render the correct text field components', () => {
    expect(personalDetailsFields.find('#givenName').length).to.eql(1);
    expect(personalDetailsFields.find('#surname').length).to.eql(1);
    expect(personalDetailsFields.find('#email').length).to.eql(1);
    expect(personalDetailsFields.find('#phone').length).to.eql(1);
  });

  describe('When textfield value is changed', () => {
    before(() => {
      const textfield = personalDetailsFields.find('TextField').at(0).node;
      textfield.props.onFieldUpdate();
    });

    it('should runs a given function via a onChange prop', () => {
      expect(callback.called).to.eql(true);
    });
  });

});
