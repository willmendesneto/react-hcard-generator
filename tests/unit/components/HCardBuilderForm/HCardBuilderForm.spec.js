import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardBuilderForm from '../../../../src/components/HCardBuilderForm';

describe('HCardBuilderForm component', () => {
  let hcardBuilderForm;

  before(() => {
    hcardBuilderForm = shallow(
      <HCardBuilderForm>
        <div className="test-container">My HCard builder content</div>
      </HCardBuilderForm>
    );
  });

  it('should renders the title', () => {
    expect(hcardBuilderForm.find('.formTitle').text()).to.eql('hCard Builder');
  });

  it('should renders the node content', () => {
    expect(hcardBuilderForm.find('.test-container').text()).to.eql('My HCard builder content');
  });
});
