import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardRow = ({ children }) => <div styleName="row">{ children }</div>;

HCardRow.propTypes = {
  children: PropTypes.node,
};

export default cssModules(HCardRow, styles);
