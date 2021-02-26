# TextField

<!-- STORY -->

<hr>

Material-ui TextField component that works using Formik's methods

##### Import

```TS
import { TextField } from 'material-ui-formik-fields';
```

##### Usage example

```TSX
<TextField
    id="email"
    name="email"
    label="Email"
    fullWidth={true}
>
```

##### Required props

| Name   | Type     | Description |
| ------ | -------- | ----------- |
| `id`   | `string` |             |
| `name` | `string` |             |

##### Optional props

| Name          | Type                      | Default | Description |
| ------------- | ------------------------- | ------- | ----------- |
| `label`       | `string`                  |         |             |
| `placeholder` | `string`                  |         |             |
| `className`   | `string`                  |         |             |
| `type`        | `string`                  |         |             |
| `margin`      | `none \| dense \| normal` |         |             |
| `fullWidth`   | `boolean`                 |         |             |
| `required`    | `boolean`                 |         |             |
