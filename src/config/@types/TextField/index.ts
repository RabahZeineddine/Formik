export type TextFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  type?: string;
  margin?: 'none' | 'dense' | 'normal';
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean
};
