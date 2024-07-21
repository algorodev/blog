import { ReactNode } from 'react'
import './Link.css'

type LinkProps = {
	children: ReactNode
	to: string
}

export const Link = ({ children, to }: LinkProps) => (
	<a className="link" href={to}>{children}</a>
)
