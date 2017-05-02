import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardBuilder from '../../../../src/components/HCardBuilder';

describe('HCardBuilder component', () => {
  let hcardBuilder;

  before(() => {
    hcardBuilder = shallow(
      <HCardBuilder>
        <div className="test-container">My HCard builder content</div>
      </HCardBuilder>
    );
  });

  it('should renders the content', () => {
    expect(hcardBuilder.find('.test-container').text()).to.eql('My HCard builder content');
  });
});
