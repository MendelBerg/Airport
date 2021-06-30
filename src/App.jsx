/* eslint-disable arrow-body-style */
import React from 'react';
import Header from './components/header/Header.jsx';
import SearchFlights from './components/searchFlights/SearchFlights.jsx';
import Scoreboard from './components/scoreboard/Scoreboard.jsx';

const App = () => {
  return (
		<>
			<Header />
			<main className="main">
				<SearchFlights />
				<Scoreboard />
			</main>
		</>
	);
};

export default App;
