import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import DataPicker from "./index";

import { DatePickerProps } from "../../config/@types/DataPicker";

const Template: Story<DatePickerProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <DataPicker {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  name: "date",
  label: "Date",
};

export default {
  component: DataPicker,
  title: "DataPicker",
};
