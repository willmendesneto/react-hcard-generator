import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardLabel = ({ labelText }) => <span styleName="label">{labelText}</span>;

HCardLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
};

export default cssModules(HCardLabel, styles);
