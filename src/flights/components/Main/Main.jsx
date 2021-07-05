/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import { flightsListSelector, inputValueSelector } from '../../flights.selectors';

import SearchFlights from './flights/components/searchFlights/SearchFlights.jsx.js';
import Scoreboard from './flights/components/scoreboard/Scoreboard.jsx.js';

const Main = ({ flights, getFlightsList, pathChanged, inputValueChanged, value }) => {
	return (
		<main className="main">
			<SearchFlights />
			<Scoreboard />
		</main>
	);
};

const mapDispatch = {
	getFlightsList: flightsActions.getFlightsList,
	pathChanged: flightsActions.pathChanged,
	inputValueChanged: flightsActions.inputValueChanged,
};

const mapState = state => {
	return {
		flights: flightsListSelector(state),
		value: inputValueSelector(state),
	};
};

export default connect(mapState, mapDispatch)(Main);
