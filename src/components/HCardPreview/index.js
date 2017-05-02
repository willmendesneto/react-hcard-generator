import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

const HCardPreview = ({ children }) => {
  return(
    <div>
      <h2 styleName="previewTitle">hCard preview</h2>
      <div styleName="hcard-preview" id="hcard-preview">
        <div className="vcard">
          { children }
        </div>
      </div>
    </div>
  );
};

HCardPreview.propTypes = {
  children: PropTypes.node,
};

export default cssModules(HCardPreview, styles);
