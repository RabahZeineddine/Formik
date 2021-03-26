import React from "react";
import { Checkbox, ListItemText, MenuItem } from "@material-ui/core";
import { FormikSelectOptionProps } from "../../../config/@types/Select";

const CheckOption = React.forwardRef((props: FormikSelectOptionProps, _ref) => {
  const { children, disabled, selectValue } = props;
  return (
    <MenuItem
      {...props}
      value={props["data-value"]}
      disabled={disabled || false}
      selected={selectValue?.includes(props["data-value"] as string)}
    >
      <Checkbox
        color="primary"
        checked={selectValue?.includes(props["data-value"] as string)}
      />
      <ListItemText primary={children} />
    </MenuItem>
  );
});

export default CheckOption;
