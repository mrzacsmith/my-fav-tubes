import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import theme from './theme'
import './index.css'

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
