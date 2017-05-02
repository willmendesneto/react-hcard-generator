import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCard from '../../../../src/components/HCard';

describe('HCard component container', () => {
  let hcard;

  before(() => {
    hcard = shallow(
      <HCard
        givenName={''}
        familyname={''}
        photo={'test.jpg'}
        email={''}
        tel={''}
        region={''}
        countryName={''}
        streetAddress={''}
        postalCode={''}
      />
    );
  });

  it('should render the internal components', () => {
    expect(hcard.find('HCardPreview').length).to.eql(1);
    expect(hcard.find('HCardFamilyName').length).to.eql(1);
    expect(hcard.find('HCardPhoto').length).to.eql(1);
    expect(hcard.find('HCardName').length).to.eql(1);
    expect(hcard.find('HCardRow').length).to.eql(2);
    expect(hcard.find('HCardAddress').length).to.eql(1);
  });
});
