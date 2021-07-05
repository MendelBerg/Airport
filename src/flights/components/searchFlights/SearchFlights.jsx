/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import SearchInput from './SearchInput.jsx';

import { connect } from 'react-redux';

import { inputValueSelector, pathSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';

import './searchFlights.scss';

const SearchFlights = ({ inputValueChanged, value }) => {
	return (
		<div className="search-flights">
			<h1 className="search-flights__title">Пошук рейсу</h1>
			<SearchInput value={value} inputValueChanged={inputValueChanged} />
		</div>
	);
};

const mapDispatch = {
	inputValueChanged: flightsActions.inputValueChanged,
};

const mapState = state => {
	return {
		value: inputValueSelector(state),
	};
};

export default connect(mapState, mapDispatch)(SearchFlights);
