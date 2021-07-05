/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Provider } from 'react-redux';

import Header from './flights/components/header/Header.jsx';
import SearchFlights from './flights/components/searchFlights/SearchFlights.jsx';
import Scoreboard from './flights/components/scoreboard/Scoreboard.jsx';
import store from './store';

const App = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Provider store={store}>
					<SearchFlights />
					<Scoreboard />
				</Provider>
			</main>
		</>
	);
};

export default App;
