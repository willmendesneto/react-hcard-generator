
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardFamilyName from '../../../../src/components/HCardFamilyName';

describe('HCardFamilyName component', () => {
  let hcardFamilyName;
  const data = { 
    givenName: 'Given Name',
    familyName: 'Family Name',
  }
  before(() => {
    hcardFamilyName = shallow(
      <HCardFamilyName
        givenName={data.givenName}
        familyName={data.familyName}
      />
    );
  });

  it('should renders the node content', () => {
    expect(hcardFamilyName.find('.fn').text()).to.eql(`${data.givenName} ${data.familyName}`);
  });
});
