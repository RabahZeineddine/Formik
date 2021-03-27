
export type FormikFieldProps = {
    name: string
    label: string
    placeholder?: string
    className?: string
    type?: string
    margin?: "none" | "dense" | "normal" | undefined
    fullWidth?: boolean
    required?: boolean
    disabled?: boolean
    multiline?: boolean
}