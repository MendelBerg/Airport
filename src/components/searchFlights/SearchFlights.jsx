/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import SearchInput from './SearchInput.jsx';
import './searchFlights.scss';

const SearchFlights = () => {
  return (
		<div className="search-flights">
				<h1 className="search-flights__title">Пошук рейсу</h1>
				<SearchInput />
		</div>
  );
};

export default SearchFlights;
