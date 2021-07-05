/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import SearchInput from './SearchInput.jsx';
import { connect } from 'react-redux';

import { inputValueSelector, pathSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';

import './searchFlights.scss';

const SearchFlights = ({ getFlightsList, inputValueChanged, value, path, searchChanged }) => {
	return (
		<div className="search-flights">
			<h1 className="search-flights__title">Пошук рейсу</h1>
			<SearchInput
				path={path}
				value={value}
				getFlightsList={getFlightsList}
				inputValueChanged={inputValueChanged}
				searchChanged={searchChanged}
			/>
		</div>
	);
};

const mapDispatch = {
	getFlightsList: flightsActions.getFlightsList,
	inputValueChanged: flightsActions.inputValueChanged,
	searchChanged: flightsActions.searchChanged,
};

const mapState = state => {
	return {
		value: inputValueSelector(state),
		path: pathSelector(state),
	};
};

export default connect(mapState, mapDispatch)(SearchFlights);
