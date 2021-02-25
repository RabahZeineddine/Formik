import React from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { useField } from 'formik';
import { TextFieldProps } from '../../config/@types/TextField';

function TextField(props: TextFieldProps) {
  const [field, meta] = useField(props);
  return (
    <MuiTextField
      error={!!(meta.touched && meta.error)}
      helperText={meta.touched && meta.error ? meta.error : ' '}
      type="text"
      size="small"
      variant="standard"
      {...field}
      {...props}
    />
  );
}

export default TextField;
