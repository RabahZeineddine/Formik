import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import Select from "./index";
import Option from "./Option";
import { FormikSelectProps } from "../../config/@types/Select/index";
import CheckOption from "./CheckOption/index";

const Template: Story<FormikSelectProps> = (args) => (
  <Formik
    enableReinitialize
    initialValues={{
      [args.name]: args.multiple ? [] : "",
    }}
    onSubmit={() => {}}
  >
    <Form>
      <Select {...args}></Select>
    </Form>
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  name: "options",
  label: "Options",
  fullWidth: false,
  children: [
    <Option value="">Select an option</Option>,
    <Option value="option1">Option 1</Option>,
    <Option value="option2">Option 2</Option>,
  ],
};

export const Checkbox = Template.bind({});

Checkbox.args = {
  name: "options",
  label: "Options",
  fullWidth: false,
  children: [
    <CheckOption value="option1">Option 1</CheckOption>,
    <CheckOption value="option2">Option 2</CheckOption>,
  ],
};

export default {
  component: Select,
  title: "Select",
};
