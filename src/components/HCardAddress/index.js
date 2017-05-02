import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import HCardRow from '../HCardRow';
import HCardField from '../HCardField';
import HCardCol from '../HCardCol';

const HCardAddress = (props) => {
  const {
    streetAddress,
    locality,
    region,
    postalCode,
    countryName,
  } = props;

  return(
    <div className="adr">
      <HCardRow>
        <HCardField
          labelText="Address"
          fieldClass="street-address"
          text={streetAddress}
        />
      </HCardRow>
      <HCardRow>
        <HCardField
          labelText=""
          fieldClass="locality"
          text={locality}
        />
        {region ? ', ': null}
        <HCardField
          fieldClass="region"
          text={region}
        />
      </HCardRow>
      <HCardCol>
        <HCardField
          labelText="Postcode"
          fieldClass="postal-code"
          text={postalCode}
        />
      </HCardCol>
      <HCardCol>
        <HCardField
          labelText="Country"
          fieldClass="country-name"
          text={countryName}
        />
      </HCardCol>
    </div>
  );
};

HCardAddress.propTypes = {
  streetAddress: PropTypes.string,
  locality: PropTypes.string,
  region: PropTypes.string,
  postalCode: PropTypes.string,
  countryName: PropTypes.string,
};

export default cssModules(HCardAddress, styles);