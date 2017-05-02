import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import Section from '../Section';

const HCardBuilderForm = ({ children }) => {

  return (
    <Section styleName="hcard-form">
      <h1 styleName="formTitle">hCard Builder</h1>
      <form>
        {children}
      </form>
    </Section>
  );
};

HCardBuilderForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(HCardBuilderForm, styles);