import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import style from "./style";
import { makeStyles } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { FormikFieldProps } from "../../config/@types/Formik";

const useStyles = makeStyles(style);

export default function DatePicker(props: FormikFieldProps) {
  const classes = useStyles();
  const { fullWidth, ...rest } = props;
  const [field, meta] = useField({ ...props, type: "date" });
  const { setFieldValue } = useFormikContext();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          error={meta.touched && meta.error ? true : false}
          helperText={meta.touched && meta.error ? meta.error : " "}
          format="dd/MM/yyyy"
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          size="small"
          className={classes.root}
          fullWidth={fullWidth || false}
          {...field}
          {...rest}
          value={(field.value && new Date(field.value)) || null}
          onChange={(val) => {
            setFieldValue(field.name, val);
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
