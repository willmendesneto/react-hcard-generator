
import React from 'react';
import sinon from 'sinon';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import AddressFields from '../../../../src/components/AddressFields';

describe('AddressFields component', () => {
  let personalDetailsFields, callback;

  before(() => {
    callback = sinon.spy();
    personalDetailsFields = shallow(
      <AddressFields
        houseNameOrNumber={''}
        street={''}
        suburb={''}
        state={''}
        postcode={''}
        country={''}
        onFieldUpdate={callback}
      />
    );
  });

  it('should NOT run a given function via a onClick prop by default', () => {
    expect(callback.calledOnce).to.eql(false);
  });

  it('should render the internal components', () => {
    expect(personalDetailsFields.find('Subtitle').length).to.eql(1);
    expect(personalDetailsFields.find('TextField').length).to.eql(6);
  });

  it('should render the internal components', () => {
    expect(personalDetailsFields.find('Subtitle').node.props.children).to.eql('Address');
  });

  it('should render the correct text field components', () => {
    expect(personalDetailsFields.find('#houseNameOrNumber').length).to.eql(1);
    expect(personalDetailsFields.find('#street').length).to.eql(1);
    expect(personalDetailsFields.find('#suburb').length).to.eql(1);
    expect(personalDetailsFields.find('#state').length).to.eql(1);
    expect(personalDetailsFields.find('#postcode').length).to.eql(1);
    expect(personalDetailsFields.find('#country').length).to.eql(1);
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
