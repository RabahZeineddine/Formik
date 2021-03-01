export type TextFieldProps = {
  id: string;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  type?: string;
  margin?: 'none' | 'dense' | 'normal';
  fullWidth?: boolean;
  required?: boolean;
};
