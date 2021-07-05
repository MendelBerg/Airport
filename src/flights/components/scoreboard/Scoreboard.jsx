/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Options from '../options/Options.jsx';
import Table from '../table/Table.jsx';
import FlightsNotFound from '../table/FlightsNotFound.jsx';

import './scoreboard.scss';

const Scoreboard = ({ flights, getFlightsList, value }) => {
	const getTable = () => (flights.length ? <Table flights={flights} /> : <FlightsNotFound />);
	return (
		<div className="scoreboard">
			<Switch>
				<Route exact path="/">
					<Options getFlightsList={getFlightsList} />
					{getTable()}
				</Route>
				<Route path="/:pathType">
					<Options getFlightsList={getFlightsList} />
					{getTable()}
				</Route>
				<Route path={`/departures${value ? `?search=${value}` : ''}`}>
					<Options getFlightsList={getFlightsList} />
					{getTable()}
				</Route>
			</Switch>
		</div>
	);
};

export default Scoreboard;
