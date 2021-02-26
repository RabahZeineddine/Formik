# Material-ui Formik Fields

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
import {TextField} from 'material-ui-formik-fields'

<Formik
    initialValues={{}}
    onSubmit={() => {}}
    >
    <Form>
        <TextField
            id="email"
            name="email"
            label="Email"
        />
    </Form>
</Formik>
```

> For more information check the [TextField Documentation](src/components/TextField/README.md)

## Demos of the package in action

Check the [Storybook page](http://RabahZeineddine.github.io/material-ui-formik-fields)

<!-- ## Instructions for contributors -->
