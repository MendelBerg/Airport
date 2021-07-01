/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import './searchFlights.scss';

const SearchInput = () => {
  return (
	<div className="search-form">
		<i className="fa fa-search" aria-hidden="true"></i>
		<input
			className="search-form__input"
			type="text"
			placeholder="Номер рейсу або місто"
			// value={this.state.value}
			// onChange={this.handleChange}
		/>
		<button
			className="btn search-form__btn"
			// onClick={this.handleTaskCreate}
		>
			Знайти
		</button>
	</div>
  );
};

export default SearchInput;


