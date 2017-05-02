import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardLabel from '../../../../src/components/HCardLabel';

describe('HCardLabel component', () => {
  let hcardLabel;

  before(() => {
    hcardLabel = shallow(<HCardLabel labelText={'Label text'} />);
  });

  it('should renders the content', () => {
    expect(hcardLabel.text()).to.eql('Label text');
  });
});
