import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import HCardLabel from '../HCardLabel';

const HCardField = (props) => {
  const {
    labelText,
    fieldClass,
    text,
  } = props;

  const labelContent = labelText !== undefined ?
          <HCardLabel labelText={labelText} /> :
          null;
  return(
    <span>
      {labelContent}
      <span className={fieldClass} styleName="field">{text}</span>
    </span>
  );
};

HCardField.propTypes = {
  labelText: PropTypes.string,
  fieldClass: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default cssModules(HCardField, styles);
