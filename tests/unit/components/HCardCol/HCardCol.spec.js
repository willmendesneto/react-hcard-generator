import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardCol from '../../../../src/components/HCardCol';

describe('HCardCol component', () => {
  let hcardCol;

  before(() => {
    hcardCol = shallow(
      <HCardCol>
        <div className="test-container">My HCard col</div>
      </HCardCol>
    );
  });

  it('should renders the content', () => {
    expect(hcardCol.find('.test-container').text()).to.eql('My HCard col');
  });
});
