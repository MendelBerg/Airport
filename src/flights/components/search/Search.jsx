/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Link } from 'react-router-dom';
import './search.scss';

const Search = ({ inputValueChanged, value }) => {
	const onChange = event => {
		inputValueChanged(event.target.value);
	};

	return (
		<div className="search-flights">
			<h1 className="search-flights__title">Пошук рейсу</h1>
			<div className="search-form">
				<i className="fa fa-search" aria-hidden="true"></i>
				<input
					className="search-form__input"
					type="text"
					placeholder="Номер рейсу або місто"
					value={value}
					onChange={onChange}
				/>
				<Link className="search-form__btn btn" to={`/departures${value ? `?search=${value}` : ''}`}>
					Знайти
				</Link>
			</div>
		</div>
	);
};

export default Search;
