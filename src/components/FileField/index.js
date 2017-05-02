import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../Button';

class FileField extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this._input.click();
  }

  render() {
    return(
      <div>
        <input id="foo" type="file" styleName="input"
          onChange={this.props.handleFile}
          ref={(c) => this._input = c}
        />
        <Button styleName="button" onClick={this.handleClick}>
          {this.props.label}
        </Button>
      </div>
    );
  }
}

FileField.propTypes = {
  label: React.PropTypes.string.isRequired,
  handleFile: React.PropTypes.func.isRequired,
};

export default cssModules(FileField, styles);
