/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import './table.scss';

const Table = () => {
  return (  
		<table class="scoreboard__options table">
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

				<tr>
					<td className="table__terminal-field"><span>A</span></td>
					<td className="table__time-field">3:35</td>
					<td className="table__way-field">Анталія</td>
					<td className="table__status-field">Вилетів о 3:39</td>
					<td className="table__company-field">
						<img src="https://api.iev.aero/media/airline/files/604bbdf45b1ad855035563.png" alt="Company Logo" />
						<span>Bees Airline</span>
					</td>
					<td className="table__flight-field">7B9001</td>
					<td className="table__details-field"><a className="table__details-link" href="#">Деталі рейсу</a></td>
				</tr>
				<tr>
					<td className="table__terminal-field table__terminal-field_blue"><span>D</span></td>
					<td className="table__time-field">3:35</td>
					<td className="table__way-field">Анталія</td>
					<td className="table__status-field">Вилетів о 3:39</td>
					<td className="table__company-field">
						<img src="https://api.iev.aero/media/airline/files/604bbdf45b1ad855035563.png" alt="Company Logo" />
						<span>Bees Airline</span>
					</td>
					<td className="table__flight-field">7B9001</td>
					<td className="table__details-field"><a className="table__details-link" href="#">Деталі рейсу</a></td>
				</tr>
				</tbody>

			</table>
	);
};

export default Table;
