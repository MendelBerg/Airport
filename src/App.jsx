/* eslint-disable arrow-body-style */
import React, {useState} from 'react';
import Header from './components/header/Header.jsx';
import SearchFlights from './components/searchFlights/SearchFlights.jsx';
import Scoreboard from './components/scoreboard/Scoreboard.jsx';
import {fetchFlights, convertDataBody} from './gateway/gateway';

const App = () => {
	const flag = 'arrival'; // arrival departure
	const [flagFlights, setFlagFlights] = useState('departure');
	// setFlagFlights(flagFlights === 'departure' ? 'arrival' : 'departure');
	// TODO: поставити обработчик подій на кнопки. Від того, що верне функція (departure, arrival), тому і буде призначений клас _blue, а в іншого видалений
	// TODO: зробити useEffect, який контролює наповненість масиву flights, які потім рендеряться на сторінку
	// TODO: зробити рендер для сторінки з польотами



	fetchFlights().then(response => {
		console.log(

			convertDataBody(response.body, flag)
		);
	});
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
