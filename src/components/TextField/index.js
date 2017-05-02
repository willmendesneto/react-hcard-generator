import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';

class TextField extends Component {

  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.props.onFieldUpdate(this.props.id, event.target.value);
  }

  render() {
    return(
      <div styleName="form-group">
        <label
          styleName="label">
          {this.props.label}
        </label>
        <input
          type="text"
          onChange={this.handleOnChange}
          value={this.props.value}
          styleName="input"
        />
      </div>
    );
  }
}

TextField.propTypes = {
  onFieldUpdate: React.PropTypes.func.isRequired,
  label: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default cssModules(TextField, styles);
