/* eslint-disable arrow-body-style */
/* eslint-disable array-callback-return */
import moment from 'moment';

const currentDay = moment(new Date()).format('DD-MM-Y');
const baseUrl = `https://api.iev.aero/api/flights/${currentDay}`;

export const fetchFlights = () => fetch(baseUrl).then(response => response.json());

const getTime = time => moment(time).format('h:mm');

export function convertDataBody(flights, pathType, search) {
	const targetFlights = flights[pathType]
		.filter(({ actual }) => moment(actual).format('DD-MM-Y') === currentDay)
		.map(flight => {
			const { term, timeTakeofFact: status } = flight;
			const shedule = flight[pathType === 'departure' ? 'timeDepShedule' : 'timeArrShedule'];
			const city = flight[pathType === 'departure' ? 'airportToID.city' : 'airportFromID.city'];
			const { name: airportName, logoSmallName: logo } = flight.airline.en;
			const { codeShare: flightCode } = flight.codeShareData[0];

			return {
				term,
				shedule: getTime(shedule),
				city,
				status: getTime(status),
				logo,
				airportName,
				flightCode,
			};
		})
		.sort((a, b) => {
			const [hourA, minsA] = a.shedule.split(':');
			const [hourB, minsB] = b.shedule.split(':');
			if (+hourA > +hourB )return true;
			if(+hourA === +hourB && +minsA > +minsB) return true;
			return false;
		});

	return !search
		? targetFlights
		: targetFlights.filter(
				({ city, flightCode }) =>
					city.toLowerCase().includes(search.toLowerCase()) ||
					flightCode.toLowerCase().includes(search.toLowerCase()),
		  );
}
