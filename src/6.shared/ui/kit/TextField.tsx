import TextField, { type TextFieldProps } from '@mui/material/TextField'

const TextFieldComponent = (props: TextFieldProps) => (
    <TextField {...props} />
)

export {
    TextFieldComponent,
    type TextFieldProps
}