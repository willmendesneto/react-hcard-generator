import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardBuilderWrapper from '../../../../src/containers/HCardBuilderWrapper';

describe('HCardBuilderWrapper component container', () => {
  let hCardBuilderWrapperer;

  before(() => {
    hCardBuilderWrapperer = shallow(<HCardBuilderWrapper />, {
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseNameOrNumber: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      photo: 'test.jpg',
    });
  });

  it('should render loading component if content did NOT load', () => {
    expect(hCardBuilderWrapperer.html().includes('class="spinner'));
    expect(hCardBuilderWrapperer.state('loading')).to.eql(false);
  });

  describe('When component is loaded', () => {
    before(() => {
      hCardBuilderWrapperer.setState({ loading: true });
    });

    it('should render the internal components', () => {
      expect(hCardBuilderWrapperer.find('HCardBuilder').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('HCardBuilderForm').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('PersonalDetailsFields').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('AddressFields').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('HCardActions').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('Section').length).to.eql(1);
      expect(hCardBuilderWrapperer.find('HCard').length).to.eql(1);
    });
  });
});
