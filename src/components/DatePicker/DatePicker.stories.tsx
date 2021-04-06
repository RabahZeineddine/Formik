import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import DatePicker from "./index";

import { DatePickerProps } from "../../config/@types/DatePicker";

const Template: Story<DatePickerProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <DatePicker {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  name: "date",
  label: "Date",
};

export default {
  component: DatePicker,
  title: "DatePicker",
};
