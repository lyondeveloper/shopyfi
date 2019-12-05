import React from 'react';

import { GroupStyles, FormInputStyles, LabelStyles } from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupStyles>
    <FormInputStyles onChange={handleChange} {...otherProps} />
    {label ? (
      <LabelStyles
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </LabelStyles>
    ) : null}
  </GroupStyles>
);

export default FormInput;
