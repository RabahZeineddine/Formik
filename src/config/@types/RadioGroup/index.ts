
export type FormikRadioGroupPropsType = {
    name: string
    label: string
    children?: React.ReactNode
    color?: "primary" | "secondary"
    row?: boolean
    fullWidth?: boolean
    disabled?: boolean
}


export type FormikRadioPropsType = {
    value: string
    label: string
    color?: "primary" | "secondary"
    disabled?: boolean
}