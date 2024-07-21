import Link from '../Link'
import './Header.css'

export const Header = () => (
	<header>
		<nav>
			<Link active to={'/'}>Home</Link>
			<Link to={'posts'}>Posts</Link>
			<Link to={'contact'}>Contact</Link>
		</nav>
	</header>
)
