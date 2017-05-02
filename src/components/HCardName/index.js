import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import HCardField from '../HCardField';

const HCardName = ({ givenName, familyName }) => {
  return(
    <span className="n" styleName="n">
      <HCardField
        fieldClass="given-name"
        text={givenName}
      />
      <HCardField
        fieldClass="family-name"
        text={familyName}
      />
    </span>
  );
};

HCardName.propTypes = {
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
};

export default cssModules(HCardName, styles);