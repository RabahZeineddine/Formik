import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import DataPicker from "./index";

import { FormikFieldProps } from "../../config/@types/Formik";

const Template: Story<FormikFieldProps> = (args) => (
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
