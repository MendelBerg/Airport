/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './searchFlights.scss';

const SearchInput = ({ inputValueChanged, value }) => {
	const onChange = event => {
		inputValueChanged(event.target.value);
	};

	return (
		<div className="search-form">
			<i className="fa fa-search" aria-hidden="true"></i>
			<input
				className="search-form__input"
				type="text"
				placeholder="Номер рейсу або місто"
				value={value}
				onChange={onChange}
			/>
			<BrowserRouter>
				<Link className="search-form__btn btn" to={`/departures${value ? `?search=${value}` : ''}`}>
					Знайти
				</Link>
			</BrowserRouter>
		</div>
	);
};

export default SearchInput;
