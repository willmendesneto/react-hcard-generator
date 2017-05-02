
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardFields from '../../../../src/components/HCardFields';

describe('HCardFields component', () => {
  let hcardFields;

  before(() => {
    hcardFields = shallow(
      <HCardFields>
        <div className="test-container">My HCard row</div>
      </HCardFields>
    );
  });

  it('should renders the node content', () => {
    expect(hcardFields.find('.test-container').text()).to.eql('My HCard row');
  });
});
