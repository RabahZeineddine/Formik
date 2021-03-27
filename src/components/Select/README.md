# Select

<!-- STORY -->

<hr>

Material-ui Select component that works using Formik's methods

##### Import

```TS
import { Select, Option } from '@rabahzeineddine/formik';
```

##### Usage example

```TSX
<Select name="options" label="Options">
    <Option value="">Select an option</Option>
    <Option value="option1">Option 1</Option>
    <Option value="option2">Option 2</Option>
</Select>
```

### Select Props

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `name`  | `string` |             |
| `label` | `string` |             |

##### Optional props

| Name        | Type              | Default | Description |
| ----------- | ----------------- | ------- | ----------- |
| `multiple`  | `boolean`         |         |             |
| `className` | `string`          |         |             |
| `children`  | `React.ReactNode` |         |             |
| `fullWidth` | `boolean`         |         |             |
| `disabled`  | `boolean`         |         |             |

### Option and CheckOption Props

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |

### Checkbox Option

##### Import

```TS
import { Select, CheckOption } from '@rabahzeineddine/formik';
```

##### Usage example

```TSX
<Select name="options" label="Options">
    <CheckOption value="">Select an option</CheckOption>
    <CheckOption value="option1">Option 1</CheckOption>
    <CheckOption value="option2">Option 2</CheckOption>
</Select>
```
