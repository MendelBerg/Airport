/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';
import './table.scss';

const Table = ({ flights }) => {
	return (
		<table className="scoreboard__options table">
			<thead>
				<tr>
					<th>Термінал</th>
					<th>Розклад</th>
					<th>Призначення</th>
					<th>Статус</th>
					<th>Авіакомпанія</th>
					<th>Рейс</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{flights.map(({ term, shedule, city, status, logo, airportName, flightCode }, index) => {
					return (
						<tr key={index}>
							<td
								className={classNames('table__terminal-field', {
									'table__terminal-field_blue': term === 'D',
								})}
							>
								<span>{term}</span>
							</td>
							<td className="table__time-field">{shedule}</td>
							<td className="table__way-field">{city}</td>
							<td className="table__status-field">Вилетів о {status}</td>
							<td className="table__company-field">
								<img src={logo} alt="Company Logo" />
								<span>{airportName}</span>
							</td>
							<td className="table__flight-field">{flightCode}</td>
							<td className="table__details-field">
								<a className="table__details-link" href="#">
									Деталі рейсу
								</a>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Table;
