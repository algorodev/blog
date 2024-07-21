import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'

const app = document.getElementById('root')!

createRoot(app).render(
	<StrictMode>
		<App/>
	</StrictMode>,
)
