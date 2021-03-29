# MaskedTextField

<!-- STORY -->

<hr>

Material-ui MaskedTextField component that works using Formik's methods

##### Import

```TS
import { MaskedTextField } from '@rabahzeineddine/formik';
```

##### Usage example

```TSX
<MaskedTextField
    name="cellphone"
    label="Cellphone"
    mask=["(",/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]
>
```

##### Required props

| Name    | Type                              | Description |
| ------- | --------------------------------- | ----------- |
| `name`  | `string`                          |             |
| `label` | `string`                          |             |
| `mask`  | `Array<string | number | RegExp>` |             |

##### Optional props

| Name        | Type                      | Default | Description |
| ----------- | ------------------------- | ------- | ----------- |
| `showMask`  | `boolean`                 |         |             |
| `className` | `string`                  |         |             |
| `margin`    | `none \| dense \| normal` |         |             |
| `fullWidth` | `boolean`                 |         |             |
| `required`  | `boolean`                 |         |             |
