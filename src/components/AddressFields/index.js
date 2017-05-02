import React from 'react';
import TextField from '../TextField';
import Subtitle from '../Subtitle';

const AddressFields = (props) => {
  const {
    houseNameOrNumber,
    street,
    suburb,
    state,
    postcode,
    country,
    onFieldUpdate,
  } = props;

  return(
    <div>
      <Subtitle>Address</Subtitle>
      <TextField id="houseNameOrNumber" label="House name or #"
        value={houseNameOrNumber}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="street" label="Street" value={street}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="suburb" label="Suburb" value={suburb}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="state" label="State" value={state}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="postcode" label="Postcode" value={postcode}
        onFieldUpdate={onFieldUpdate}
      />
      <TextField id="country" label="Country" value={country}
        onFieldUpdate={onFieldUpdate}
      />
    </div>
  );
};

AddressFields.propTypes = {
  houseNameOrNumber: React.PropTypes.string.isRequired,
  street: React.PropTypes.string.isRequired,
  suburb: React.PropTypes.string.isRequired,
  state: React.PropTypes.string.isRequired,
  postcode: React.PropTypes.string.isRequired,
  country: React.PropTypes.string.isRequired,
  onFieldUpdate: React.PropTypes.func.isRequired,
};

export default AddressFields;
