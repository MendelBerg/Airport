/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import SearchInput from './SearchInput.jsx';
import { connect } from 'react-redux';
import { inputValueSelector } from '../../tasks.selectors';
import * as tasksActions from '../../tasks.actions';
import './searchFlights.scss';

const SearchFlights = ({ getTaskList, inputValueChanged, value }) => {
	return (
		<div className="search-flights">
			<h1 className="search-flights__title">Пошук рейсу</h1>
			<SearchInput value={value} getTaskList={getTaskList} inputValueChanged={inputValueChanged} />
		</div>
	);
};

const mapDispatch = {
	getTaskList: tasksActions.getTaskList,
	inputValueChanged: tasksActions.inputValueChanged,
};

const mapState = state => {
	return {
		value: inputValueSelector(state),
	};
};

export default connect(mapState, mapDispatch)(SearchFlights);