# TextField

<!-- STORY -->

<hr>

Material-ui TextField component that works using Formik's methods

##### Import

```TS
import { TextField } from '@rabahzeineddine/formik';
```

##### Usage example

```TSX
<TextField
    name="email"
    label="Email"
    fullWidth={true}
>
```

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `name`  | `string` |             |
| `label` | `string` |             |

##### Optional props

| Name          | Type                      | Default | Description |
| ------------- | ------------------------- | ------- | ----------- |
| `placeholder` | `string`                  |         |             |
| `className`   | `string`                  |         |             |
| `type`        | `string`                  |         |             |
| `margin`      | `none \| dense \| normal` |         |             |
| `fullWidth`   | `boolean`                 |         |             |
| `required`    | `boolean`                 |         |             |
| `disabled`    | `boolean`                 |         |             |
