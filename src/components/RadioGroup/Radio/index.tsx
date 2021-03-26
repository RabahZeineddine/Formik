import React from "react";
import { FormControlLabel, Radio as MuiRadio } from "@material-ui/core";
import { FormikRadioPropsType } from "../../../config/@types/RadioGroup";

function Radio(props: FormikRadioPropsType) {
  const { color, disabled, ...rest } = props;

  return (
    <FormControlLabel
      disabled={disabled}
      control={<MuiRadio color={color || "default"} />}
      {...rest}
    />
  );
}

export default Radio;
