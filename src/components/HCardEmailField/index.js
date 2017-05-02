import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import HCardLabel from '../HCardLabel';

const HCardEmailField = ({ labelText, text }) => {
  return(
    <span>
      <HCardLabel labelText={labelText}/>
      <a
        className="email"
        styleName="email"
        href={`mailto:${text}`}
      >
        {text}
      </a>
    </span>
  );
};

HCardEmailField.propTypes = {
  labelText: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default cssModules(HCardEmailField, styles);