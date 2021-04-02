import React from "react";
import { TextField } from "@material-ui/core";
import MaskedInput from "react-text-mask";
import { useField } from "formik";
import { MaskedTextFieldProps } from "../../config/@types/MaskedTextField";

function TextMaskCustom(props) {
  const { inputRef, mask, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
    />
  );
}

function MaskedTextField(props: MaskedTextFieldProps) {
  const { mask, showMask, ...rest } = props;
  const [field, meta] = useField(props);

  return (
    <TextField
      error={meta.touched && meta.error ? true : false}
      helperText={meta.touched && meta.error ? meta.error : " "}
      type="text"
      size="small"
      InputProps={{
        inputComponent: TextMaskCustom,
        inputProps: {
          mask,
          showMask,
          ...field,
        },
      }}
      {...rest}
    />
  );
}

export default MaskedTextField;
