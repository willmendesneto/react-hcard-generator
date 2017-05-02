import React from 'react';
import FileField from '../FileField';
import cssModules from 'react-css-modules';
import Button from '../Button';
import styles from './styles.css';

const HCardActions = ({ onUploadFile, onSubmit }) => {
    return (
        <div styleName="buttons">
            <div styleName="button-column">
                <FileField
                    label="Upload Avatar"
                    handleFile={onUploadFile}
                />
            </div>
            <div styleName="button-column">
                <Button
                  className={'btn'}
                  styleName="upload"
                  onClick={onSubmit}>
                    Create hCard
                </Button>
            </div>
        </div>
    );
};

HCardActions.propTypes = {
  onUploadFile: React.PropTypes.func.isRequired,
  onSubmit: React.PropTypes.func.isRequired,
};

export default cssModules(HCardActions, styles);
