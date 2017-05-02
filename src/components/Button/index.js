import React from 'react';

const Button = (props) => {
  const attributes = {};
  const classNameList = [];

  Object.keys(props).filter((key) => {
    return key.indexOf('data-') === 0;
  }).forEach((key) => {
    attributes[key] = props[key];
  });

  if (props.disabled) {
    attributes.disabled = 'disabled';
  }

  attributes.className = [].concat(
    classNameList,
    props.className
  ).join(' ').trim();

  return (
    <button
      onClick={props.onClick}
      type={props.type || 'button'}
      {...attributes} >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  primary: React.PropTypes.bool,
  type: React.PropTypes.string,
  secondary: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.node,
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
};

export default Button;
