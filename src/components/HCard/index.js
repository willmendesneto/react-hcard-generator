import React from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import HCardRow from '../HCardRow';
import HCardField from '../HCardField';
import HCardAddress from '../HCardAddress';
import HCardPhoto from '../HCardPhoto';
import HCardFields from '../HCardFields';
import HCardPreview from '../HCardPreview';
import HCardName from '../HCardName';
import HCardEmailField from '../HCardEmailField';
import HCardFamilyName from '../HCardFamilyName';

const HCard = (props) => {
  const {
    givenName,
    familyName,
    photo,
    email,
    tel,
    streetAddress,
    locality,
    region,
    postalCode,
    countryName,
  } = props;

  return(
    <HCardPreview>
      <HCardFamilyName
        givenName={givenName}
        familyName={familyName}
      />
      <HCardPhoto
        photo={photo}
      />
      <HCardName
        givenName={givenName}
        familyName={familyName}
      />
      <HCardFields>
        <HCardRow>
          <HCardEmailField
            labelText="Email"
            text={email}
          />
        </HCardRow>
        <HCardRow>
          <HCardField
            labelText="Phone"
            fieldClass="tel"
            text={tel}
          />
        </HCardRow>
        <HCardAddress
          streetAddress={streetAddress}
          locality={locality}
          region={region}
          postalCode={postalCode}
          countryName={countryName}
        />
      </HCardFields>
    </HCardPreview>
  );
};

HCard.propTypes = {
  givenName: React.PropTypes.string.isRequired,
  familyName: React.PropTypes.string.isRequired,
  photo: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  tel: React.PropTypes.string.isRequired,
  region: React.PropTypes.string.isRequired,
  locality: React.PropTypes.string.isRequired,
  countryName: React.PropTypes.string.isRequired,
  streetAddress: React.PropTypes.string.isRequired,
  postalCode: React.PropTypes.string.isRequired,
};


export default cssModules(HCard, styles);
