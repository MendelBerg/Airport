/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { compareTime, getTime } from '../../common';
import './table.scss';

const getStatusText = (shedule, status) => {
	const { pathType } = useParams();

	if (pathType === 'departures') {
		return `Вилетів о ${status}`;
	}

	return compareTime(shedule, getTime(new Date())) < 0 ? `Прибув ${status}` : 'В польоті';
};

const Table = ({ flightsList }) => {
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
				{flightsList.map(
					({ term, shedule, city, status, logo, airportName, flightCode }, index) => {
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
								<td className="table__status-field">{getStatusText(shedule, status)}</td>
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
					},
				)}
			</tbody>
		</table>
	);
};

export default Table;
