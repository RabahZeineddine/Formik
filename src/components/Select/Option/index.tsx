import React from "react";
import { MenuItem } from "@material-ui/core";
import { FormikSelectOptionProps } from "../../../config/@types/Select";

const Option = React.forwardRef((props: FormikSelectOptionProps, _ref) => {
  const { selectValue, children, ...rest } = props;
  return <MenuItem {...rest}>{children}</MenuItem>;
});

export default Option;
