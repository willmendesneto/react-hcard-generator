import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardFamilyName = ({ givenName, familyName }) => {
  return (
    <div className="fn" styleName="fn">
      {`${givenName} ${familyName}`}
    </div>
  );
};

HCardFamilyName.propTypes = {
  givenName: PropTypes.string.isRequired,
  familyName: PropTypes.string.isRequired,
};

export default cssModules(HCardFamilyName, styles);