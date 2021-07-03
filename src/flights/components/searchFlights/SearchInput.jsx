/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
// import { inputValueChanged } from '../../tasks.actions';
import './searchFlights.scss';

const SearchInput = ({getTaskList, inputValueChanged, value}) => {
	// const [value, setValue] = useState('');
	console.log('value', value);
	// console.log('inputValueChanged', inputValueChanged);

	const handleChange = event => {
		// setValue(event.target.value);
		inputValueChanged(event.target.value);
	};

	const search = event => {
		event.preventDefault();
		// getTaskList();
	};

	return (
		<form className="search-form" onSubmit={search}>
			<i className="fa fa-search" aria-hidden="true"></i>
			<input
				className="search-form__input"
				type="text"
				placeholder="Номер рейсу або місто"
				value={value}
				onChange={handleChange}
			/>
			<button className="btn search-form__btn">Знайти</button>
		</form>
	);
};

export default SearchInput;
