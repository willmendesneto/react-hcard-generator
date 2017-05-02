import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HCardActions from '../../../../src/components/HCardActions';

const noop = () => null;

describe('HCardActions component container', () => {
  let hcardActions;

  before(() => {
    hcardActions = shallow(
      <HCardActions
        onUploadFile={noop}
        onSubmit={noop}
      />
    );
  });

  it('should render the internal components', () => {
    expect(hcardActions.find('FileField').length).to.eql(1);
    expect(hcardActions.find('Button').length).to.eql(1);
  });
});
