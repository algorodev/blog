import { ReactNode } from 'react'
import './Link.css'

type LinkProps = {
	active?: boolean
	children: ReactNode
	to: string
}

export const Link = ({ active, children, to }: LinkProps) => (
	<a className={`link ${active ? 'active' : ''}`} href={to}>{children}</a>
)
