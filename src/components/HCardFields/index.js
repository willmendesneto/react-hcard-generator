import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardFields = ({ children }) => <div styleName="fields">{ children }</div>;

HCardFields.propTypes = {
  children: PropTypes.node,
};

export default cssModules(HCardFields, styles);
