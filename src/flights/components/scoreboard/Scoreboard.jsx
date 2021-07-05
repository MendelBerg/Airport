/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { flightsListSelector, searchSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';

import Options from './Options.jsx';
import Table from './table/Table.jsx';
import FlightsNotFound from './table/FlightsNotFound.jsx';

import './scoreboard.scss';

const Scoreboard = ({ flights, getFlightsList, pathChanged, search }) => {
	return (
		<div className="scoreboard">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Options pathChanged={pathChanged} getFlightsList={getFlightsList} search={search} />
					</Route>
					<Route path="/:pathType">
						<Options pathChanged={pathChanged} getFlightsList={getFlightsList} search={search} />
					</Route>
				</Switch>
			</BrowserRouter>
			{flights.length ? <Table flights={flights} /> : <FlightsNotFound/>}
			
		</div>
	);
};

const mapDispatch = {
	getFlightsList: flightsActions.getFlightsList,
	pathChanged: flightsActions.pathChanged,
};

const mapState = state => {
	return {
		flights: flightsListSelector(state),
		search: searchSelector(state),
	};
};

export default connect(mapState, mapDispatch)(Scoreboard);
