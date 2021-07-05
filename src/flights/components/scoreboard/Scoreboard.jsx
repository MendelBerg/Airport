/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Options from './Options.jsx';
import Table from './table/Table.jsx';
import FlightsNotFound from './table/FlightsNotFound.jsx';

import './scoreboard.scss';

const Scoreboard = ({ flights, getFlightsList, pathChanged, value }) => {
	return (
		<div className="scoreboard">
			<Switch>
				<Route exact path="/">
					<Options pathChanged={pathChanged} getFlightsList={getFlightsList} />
				</Route>
				<Route path="/:pathType">
					<Options pathChanged={pathChanged} getFlightsList={getFlightsList} />
				</Route>
				<Route path={`/departures${value ? `?search=${value}` : ''}`}>
					<Options pathChanged={pathChanged} getFlightsList={getFlightsList} />
				</Route>
			</Switch>
			{flights.length ? <Table flights={flights} /> : <FlightsNotFound />}
		</div>
	);
};

export default Scoreboard;
