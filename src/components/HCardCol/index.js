import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardCol = ({ children }) => <div styleName="col">{ children }</div>;

HCardCol.propTypes = {
  children: PropTypes.node,
};

export default cssModules(HCardCol, styles);
