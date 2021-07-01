/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
import moment from 'moment';

const currentDay = moment(new Date()).format('DD-MM-Y');
const baseUrl = `https://api.iev.aero/api/flights/${currentDay}`;

export const fetchFlights = () => fetch(baseUrl).then(response => response.json());

export function convertDataBody(flights, flag) {
	return flights[flag]
		.filter(({ actual }) => moment(actual).format('DD-MM-Y') === currentDay)
		.map(flight => {
			console.log('currentDay ', flight['airportFromID.city'], currentDay);
			console.log('actual ', flight['airportFromID.city'], moment(flight.actual).format('DD-MM-Y'));
			const { term, timeTakeofFact: status } = flight;
			const shedule = flight[flag === 'departure' ? 'timeDepShedule' : 'timeArrShedule'];
			const city = flight[flag === 'departure' ? 'airportToID.city' : 'airportFromID.city'];
			const { name: airportName, logoSmallName: logo } = flight.airline.en;
			const { codeShare: flightCode } = flight.codeShareData[0];

			return {
				term,
				shedule,
				city,
				status,
				logo,
				airportName,
				flightCode,
			};
		});
}
