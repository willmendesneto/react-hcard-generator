import React from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const LoadingContent = () => {
  return (
    <div styleName="spinner">
      <div styleName="double-bounce1"></div>
      <div styleName="double-bounce2"></div>
    </div>
  );
};

export default cssModules(LoadingContent, styles);
