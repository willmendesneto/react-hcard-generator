import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardPhoto = ({ photo }) => {
  return (
    <img
      styleName="photo"
      src={photo}
      alt="image of the hCard owner"
    />
  );
};

HCardPhoto.propTypes = {
  photo: PropTypes.string,
};

export default cssModules(HCardPhoto, styles);
