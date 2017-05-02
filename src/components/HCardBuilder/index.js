import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardBuilder = ({ children }) => {
    return (
        <div styleName="hcard-builder">
            { children }
        </div>
    );
};

HCardBuilder.propTypes = {
  children: PropTypes.node,
};

export default cssModules(HCardBuilder, styles);
