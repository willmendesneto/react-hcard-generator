import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardPhoto from '../../../../src/components/HCardPhoto';

describe('HCardPhoto component', () => {
  let hcardPhoto;
  const photo = 'my-photo.jpg';

  before(() => {
    hcardPhoto = shallow(<HCardPhoto photo={photo} />);
  });

  it('should renders the default hCard image class', () => {
    expect(hcardPhoto.find('.photo').length).to.eql(1);
  });

  it('should renders image link', () => {
    expect(hcardPhoto.props().src).to.eql(photo);
  });
});
