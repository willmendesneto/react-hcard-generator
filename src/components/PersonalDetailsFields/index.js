import React from 'react';
import TextField from '../TextField';
import Subtitle from '../Subtitle';

const PersonalDetailsFields = (props) => {
  const {
    givenName,
    surname,
    email,
    phone,
    onFieldUpdate,
  } = props;

  return(
    <div>
      <Subtitle>Personal details</Subtitle>
      <TextField id="givenName" label="Given name"
        value={givenName}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="surname" label="Surname" value={surname}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="email" label="Email" value={email}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="phone" label="Phone" value={phone}
        onFieldUpdate={onFieldUpdate}
      />
    </div>
  );
};

PersonalDetailsFields.propTypes = {
  givenName: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  onFieldUpdate: React.PropTypes.func.isRequired,
};

export default PersonalDetailsFields;
