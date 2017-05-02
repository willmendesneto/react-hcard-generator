import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardEmailField from '../../../../src/components/HCardEmailField';

describe('HCardEmailField component', () => {
  let hcardEmailField;

  before(() => {
    hcardEmailField = shallow(<HCardEmailField labelText={'Label text'} text={'email@email.com'} />);
  });

  it('should renders the default hCard label', () => {
    expect(hcardEmailField.find('HCardLabel').length).to.eql(1);
  });

  it('should renders the email link content', () => {
    const email = hcardEmailField.find('.email');

    expect(email.text()).to.eql('email@email.com');
    expect(email.props().href).to.eql('mailto:email@email.com');
  });
});
