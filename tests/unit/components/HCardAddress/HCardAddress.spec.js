import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardAddress from '../../../../src/components/HCardAddress';

describe('HCardAddress component container', () => {
  let hcardAddress;

  before(() => {
    hcardAddress = shallow(<HCardAddress />, {
      streetAddress: '',
      locality: '',
      region: '',
      postalCode: '',
      countryName: '',
    });
  });

  it('should render the internal components', () => {
    expect(hcardAddress.find('HCardRow').length).to.eql(2);
    expect(hcardAddress.find('HCardCol').length).to.eql(2);
    expect(hcardAddress.find('HCardField').length).to.eql(5);
  });
});
