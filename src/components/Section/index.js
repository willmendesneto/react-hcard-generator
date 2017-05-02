import React, { PropTypes } from 'react';

const Section = (props) => {
  const attributes = {};
  const classNameList = ['section'];

  attributes.className = [].concat(
    classNameList,
    props.className
  ).join(' ').trim();

  return (
    <section {...attributes} >
      { props.children }
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
