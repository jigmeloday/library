import { OutlinedInputProps, SxProps, Theme } from "@mui/material";
export type MatInputVariants = 'filled' | 'outlined' | 'standard';

export interface InputModel{
    InputProps?: Partial<OutlinedInputProps>;
    label?: string;
    name?: string
    placeholder?: string;
    variant?: MatInputVariants;
    id?: string;
    className?: string;
    type?: string;
    value?: string;
    onChange?: any;
    onBlur?: any
    dataCy?: string;
    error?: boolean;
    helperText?: string;
    sx?: SxProps<Theme>;
    required?: boolean;
}