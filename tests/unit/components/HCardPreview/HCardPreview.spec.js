import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardPreview from '../../../../src/components/HCardPreview';

describe('HCardPreview component', () => {
  let hcardPreview;

  before(() => {
    hcardPreview = shallow(
      <HCardPreview>
        <div className="test-container">My HCard VCard preview content</div>
      </HCardPreview>
    );
  });

  it('should renders the preview title', () => {
    expect(hcardPreview.find('.previewTitle').text()).to.eql('hCard preview');
  });

  it('should renders the default hCard vcard class', () => {
    expect(hcardPreview.find('.vcard').length).to.eql(1);
  });

  it('should renders the content', () => {
    expect(hcardPreview.find('.test-container').text()).to.eql('My HCard VCard preview content');
  });
});
