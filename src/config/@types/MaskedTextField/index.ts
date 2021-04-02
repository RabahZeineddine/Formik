
export type MaskedTextFieldProps = {
    name: string;
    label: string;
    mask: Array<string | number | RegExp>
    showMask?: boolean
    className?: string;
    margin?: 'none' | 'dense' | 'normal';
    fullWidth?: boolean;
    required?: boolean;
    disabled?: boolean
};
