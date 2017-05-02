import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Subtitle from '../../../../src/components/Subtitle';

describe('Subtitle component', () => {
  let subtitle;

  before(() => {
    subtitle = shallow(<Subtitle>My subtitle</Subtitle>);
  });

  it('should renders the given text', () => {
    expect(subtitle.text()).to.eql('My subtitle');
  });
});
