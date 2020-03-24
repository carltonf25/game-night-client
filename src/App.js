import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BurgerNav from './components/BurgerNav';
import { AppContext } from './AppContext';
import routes from './router';
import { useRoutes } from 'hookrouter';
import { useSpring } from 'react-spring';
import './App.css';

const App = () => {
	const routeResult = useRoutes(routes);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || false);

	const [event, setEvent] = useState({});
	const [guests, setGuests] = useState({});

	const [isNavOpen, setNavOpen] = useState(false);
	const navAnimation = useSpring({
		display: isNavOpen ? `` : `none`,
		transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(100%,0, 0)`
	});

	const logOut = () => {
		localStorage.removeItem('user');
		setUser(false);
	};

	useEffect(() => {}, []);

	return (
		<AppContext.Provider value={{ user, setUser, event, setEvent, guests, setGuests }}>
			<BurgerNav
				logOut={() => logOut()}
				user={user}
				style={navAnimation}
				setNavOpen={setNavOpen}
				isNavOpen={isNavOpen}
			/>
			<div className="App">
				<Header logOut={() => logOut()} setNavOpen={setNavOpen} isNavOpen={isNavOpen} />
				{routeResult}
				<Footer />
			</div>
		</AppContext.Provider>
	);
};

export default App;
