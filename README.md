# Material-ui Formik components

This project offers [Material-ui](https://material-ui.com/) input fields that works with [Formik](https://formik.org/)

## Why a package was created

As I use [Material-ui](https://material-ui.com/) in my projects, I decided to create this package that offers Material-ui fields as a simple components that works with Formik and manages Formik's methods and values.

## What problem the package solves

Using this package no needs to configure Formik methods on every input.

## How the package solves the problem

It manages Formik's methods on every input.

## All valid configurations/props of the package

### Components

#### TextField

```TSX
import { TextField } from '@rabahzeineddine/formik'

<Formik
    initialValues={{}}
    onSubmit={() => {}}
    >
    <Form>
        <TextField
            name="email"
            label="Email"
        />
    </Form>
</Formik>
```

> For more information check the [TextField Documentation](src/components/TextField/README.md)  

#### RadioGroup

```TSX
import { RadioGroup, Radio } from '@rabahzeineddine/formik'

<Formik
    initialValues={{}}
    onSubmit={() => {}}
    >
    <Form>
        <RadioGroup name="sex">
            <Radio value="male" label="Male" />
            <Radio value="female" label="Female" />
        </RadioGroup>
    </Form>
</Formik>
```

> For more information check the [RadioGroup Documentation](src/components/RadioGroup/README.md)

#### Select

```TSX
import { Select, Option } from '@rabahzeineddine/formik'

<Formik
    initialValues={{}}
    onSubmit={() => {}}
    >
    <Form>
        <Select name="options" label="Options">
            <Option value="">Select an option</Option>
            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
        </Select>
    </Form>
</Formik>
```

> For more information check the [Select Documentation](src/components/Select/README.md)

#### DataPicker

```TSX
import { DataPicker } from '@rabahzeineddine/formik'

<Formik
    initialValues={{}}
    onSubmit={() => {}}
    >
    <Form>
        <DataPicker name="date" label="Date" />
    </Form>
</Formik>
```

> For more information check the [DataPicker Documentation](src/components/DataPicker/README.md)

## Demos of the package in action

Check the [Storybook page](https://rabahzeineddine.github.io/Formik)

<!-- ## Instructions for contributors -->
