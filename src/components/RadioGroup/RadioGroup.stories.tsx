import React from "react";

import { Story } from "@storybook/react";
import { Form, Formik } from "formik";
import RadioGroup from "./index";
import Radio from "./Radio";

import { FormikRadioGroupPropsType } from "../../config/@types/RadioGroup";

const Template: Story<FormikRadioGroupPropsType> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <RadioGroup {...args}>
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
      </RadioGroup>
    </Form>
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  name: "sex",
  label: "Sex",
  row: true,
  fullWidth: true,
};

export default {
  component: RadioGroup,
  title: "RadioGroup",
};
