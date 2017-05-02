import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const Subtitle = ({ children }) => {
    return (
        <h2 styleName="subtitle">
            { children }
        </h2>
    );
};

Subtitle.propTypes = {
  children: PropTypes.node,
};

export default cssModules(Subtitle, styles);
