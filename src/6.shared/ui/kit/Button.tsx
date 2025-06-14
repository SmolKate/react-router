import Button, { type ButtonProps } from '@mui/material/Button'

interface ButtonComponentsProps extends ButtonProps {
    children: React.ReactNode
}

const ButtonComponent = ({ children, ...props }: ButtonComponentsProps) => (
    <Button {...props}>{children}</Button>
)

export {
    ButtonComponent,
    type ButtonProps
}