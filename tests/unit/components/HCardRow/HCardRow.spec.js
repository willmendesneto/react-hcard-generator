import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardRow from '../../../../src/components/HCardRow';

describe('HCardRow component', () => {
  let hcardRow;

  before(() => {
    hcardRow = shallow(
      <HCardRow>
        <div className="test-container">My HCard row</div>
      </HCardRow>
    );
  });

  it('should renders the content', () => {
    expect(hcardRow.find('.test-container').text()).to.eql('My HCard row');
  });
});
