import { ReactNode } from 'react'
import './Button.css'

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonStyle = 'filled' | 'outlined'
type ButtonSize = 'regular' | 'full-width'

type ButtonProps = {
	callback: () => void
	children: ReactNode
	size?: ButtonSize
	style?: ButtonStyle
	type?: ButtonType
}

export const Button = ({
	callback,
	children,
	size = 'regular',
	style = 'filled',
	type = 'button'
}: ButtonProps) => (
	<button
		className="button"
		data-size={size}
		data-style={style}
		type={type}
		onClick={callback}>
		{children}
	</button>
)
