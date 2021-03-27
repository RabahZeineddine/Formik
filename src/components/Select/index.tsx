import React from "react";
import clsx from "clsx";
import {
  FormControl,
  InputLabel,
  FormHelperText,
  makeStyles,
} from "@material-ui/core";
import { Select as MuiSelect } from "@material-ui/core";
import { useField } from "formik";
import style from "./style";
import { FormikSelectProps } from "../../config/@types/Select";

const useStyles = makeStyles(style);

function Select(props: FormikSelectProps) {
  const classes = useStyles();
  const { children, fullWidth, disabled, multiple } = props;
  const [field, meta] = useField({
    ...props,
    type: "select",
    multiple: multiple || false,
  });

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
    >
      <InputLabel id={`label_${props.name}`} style={{ padding: 0 }}>
        {props.label}
      </InputLabel>
      <MuiSelect
        classes={{
          root: clsx({
            [classes.fullWidth]: fullWidth,
          }),
        }}
        multiple={multiple || false}
        labelId={`label_${props.name}`}
        disabled={disabled}
        {...field}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return child;
          let elementChild: React.ReactElement = child;
          return React.cloneElement(elementChild, {
            key: `${index}`,
            selectValue: meta.value,
          });
        })}
      </MuiSelect>
      <FormHelperText>
        {meta.touched && meta.error ? meta.error : " "}
      </FormHelperText>
    </FormControl>
  );
}

export default Select;
