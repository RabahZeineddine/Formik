import React from "react";
import { useField } from "formik";
import {
  RadioGroup as MuiRadioGroup,
  makeStyles,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@material-ui/core";
import style from "./style";
import clsx from "clsx";
import { FormikRadioGroupPropsType } from "../../config/@types/RadioGroup";

const useStyles = makeStyles(style);

function RadioGroup(props: FormikRadioGroupPropsType) {
  const classes = useStyles();
  const { children, color, fullWidth, label, disabled, row } = props;
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <FormControl
      error={meta.touched && meta.error ? true : false}
      className={classes.formControl}
      size="small"
      classes={{
        root: clsx({
          [classes.fullWidth]: fullWidth,
        }),
      }}
      disabled={disabled}
    >
      {label && <FormLabel component="legend">{label}</FormLabel>}
      <MuiRadioGroup {...field} row={row} value={meta.value}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          let elementChild: React.ReactElement = child;
          return React.cloneElement(elementChild, {
            key: `${index}`,
            color,
            disabled,
          });
        })}
      </MuiRadioGroup>
      <FormHelperText>
        {meta.touched && meta.error ? meta.error : " "}
      </FormHelperText>
    </FormControl>
  );
}

export default RadioGroup;
