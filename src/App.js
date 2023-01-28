
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Interest from './Components/Interest';
import Profile from './Components/Profile';
import { createContext, useState } from 'react'
import ReactSwitch from 'react-switch'
export const ThemeContext = createContext(null)
function App() {
  	const [theme, setTheme] = useState('dark')

		const toggleTheme = () => {
			setTheme((curr) => (curr === 'light' ? 'dark' : 'light'))
		}
  return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div className="app" id={theme}>
				<div className="card">
					<Profile />
					<About />
					<Interest />
					<Footer />
				</div>
				<div className="switch">
					<label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
					<ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
				</div>
			</div>
		</ThemeContext.Provider>
	)
}

export default App;
