import React from 'react';

import { Story } from '@storybook/react';
import { Form, Formik } from 'formik';
import TextField from './index';

import { TextFieldProps } from '../../config/@types/TextField';

const Template: Story<TextFieldProps> = (args) => (
  <Formik initialValues={{}} onSubmit={() => {}}>
    <Form>
      <TextField {...args} />
    </Form>
  </Formik>
);

export const Default = Template.bind({});

Default.args = {
  id: 'email',
  name: 'email',
  label: 'Email',
};

export default {
  component: TextField,
  title: 'TextField',
};
