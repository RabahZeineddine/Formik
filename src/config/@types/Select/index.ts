

export interface FormikSelectProps {
    name: string
    label: string
    multiple?: boolean
    className?: string
    children?: React.ReactNode
    fullWidth?: boolean
    disabled?: boolean
}


export interface FormikSelectOptionProps {
    value: string
    'data-value'?: string
    selectValue?: Array<string> | string
    disabled?: boolean
    children?: React.ReactNode
}

export type ResetMultiSelectOptionsType = {
    fieldName: string;
    uniqueValue: any;
};
