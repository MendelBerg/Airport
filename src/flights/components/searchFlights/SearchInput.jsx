/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';

import { getPathOption } from '../../common';

import './searchFlights.scss';

const SearchInput = ({ getFlightsList, inputValueChanged, value, path, searchChanged }) => {
	const onChange = event => {
		inputValueChanged(event.target.value);
	};

	const onSearch = event => {
		event.preventDefault();
		searchChanged(value);
		getFlightsList(getPathOption(path), value);
	};

	return (
		<form className="search-form" onSubmit={onSearch}>
			<i className="fa fa-search" aria-hidden="true"></i>
			<input
				className="search-form__input"
				type="text"
				placeholder="Номер рейсу або місто"
				value={value}
				onChange={onChange}
			/>
			<button className="btn search-form__btn">Знайти</button>
		</form>
	);
};

export default SearchInput;
