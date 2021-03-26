# RadioGroup

<!-- STORY -->

<hr>

Material-ui RadioGroup component that works using Formik's methods

##### Import

```TS
import { RadioGroup, Radio } from '@rabahzeineddine/formik';
```

##### Usage example

```TSX
<RadioGroup name="sex">
        <Radio value="male" label="Male" />
        <Radio value="female" label="Female" />
</RadioGroup>
```

### RadioGroup Props

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `name`  | `string` |             |
| `label` | `string` |             |

##### Optional props

| Name        | Type                   | Default | Description |
| ----------- | ---------------------- | ------- | ----------- |
| `children`  | `React.ReactNode`      |         |             |
| `color`     | `primary \| secondary` |         |             |
| `row`       | `boolean`              |         |             |
| `fullWidth` | `boolean`              |         |             |
| `disabled`  | `boolean`              |         |             |

### Radio Props

##### Required props

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| `value` | `string` |             |
| `label` | `string` |             |

##### Optional props

| Name       | Type                   | Default | Description |
| ---------- | ---------------------- | ------- | ----------- |
| `color`    | `primary \| secondary` |         |             |
| `disabled` | `boolean`              |         |             |
