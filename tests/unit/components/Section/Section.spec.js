import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Section from '../../../../src/components/Section';

describe('Section component', () => {
  let section;

  before(() => {
    section = shallow(
      <Section>
        <div className="test-container">my section content</div>
      </Section>
    );
  });

  it('should renders the content', () => {
    expect(section.find('.test-container').text()).to.eql('my section content');
  });
});
