/* eslint-disable arrow-body-style */
import React from 'react';
import Header from './components/header/Header.jsx';
import SearchFlights from './components/searchFlights/SearchFlights.jsx';

const App = () => {
  return (
		<>
			<Header />
			<main className="main">
				<SearchFlights />
			</main>
		</>
	);
};

export default App;
