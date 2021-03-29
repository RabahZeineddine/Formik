import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import MaskedTextField from "./index";

import { MaskedTextFieldProps } from "../../config/@types/MaskedTextField";

const Template: Story<MaskedTextFieldProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <MaskedTextField {...args} />
    </Form>
  </Formik>
);

export const CellPhone = Template.bind({});

CellPhone.args = {
  name: "cellphone",
  label: "Cellphone",
  mask: [
    "(",
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ],
  showMask: true,
  fullWidth: true,
};

export default {
  component: MaskedTextField,
  title: "MaskedTextField",
};
