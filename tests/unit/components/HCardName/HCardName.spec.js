import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardName from '../../../../src/components/HCardName';

describe('HCardName component', () => {
  let hcardName;
  const data = {
    givenNameText: 'Given',
    familyNameText: 'Family Name',
  };

  before(() => {
    hcardName = shallow(
      <HCardName
        givenName={data.givenNameText}
        familyName={data.familyNameText}
      />
    );
  });

  it('should renders the default hCard name class', () => {
    expect(hcardName.find('.n').length).to.eql(1);
  });

  it('should renders the default hCard field for each username part', () => {
    expect(hcardName.find('HCardField').length).to.eql(2);
  });
});
