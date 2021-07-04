/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { getPathOption } from '../../common';
import { Link, BrowserRouter } from 'react-router-dom';
import './searchFlights.scss';

const SearchInput = ({ getTaskList, inputValueChanged, value, path, searchChanged }) => {
	const handleChange = event => {
		inputValueChanged(event.target.value);
	};

	const search = event => {
		event.preventDefault();
		searchChanged(value);
		getTaskList(getPathOption(path), value);
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
			<BrowserRouter>
				<Link
					className="btn search-form__btn"
					to={{ pathname: `/${path}`, search: `?search=${value}` }}
				>
					Знайти
				</Link>
			</BrowserRouter>
		</form>
	);
};

export default SearchInput;
