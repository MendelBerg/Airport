import moment from 'moment';

export const currentDay = moment(new Date()).format('DD-MM-Y');
export const getPathOption = path => (path ? path.slice(0, -1) : 'departure');

const getTime = time => moment(time).format('H:mm');

function extractFlightsData(flight, pathType) {
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
}

function compareTime(a, b) {
	const [hourA, minsA] = a.shedule.split(':');
	const [hourB, minsB] = b.shedule.split(':');
	const comparedHours = hourA - hourB;
	return comparedHours || minsA - minsB;
}

const compareSearch = (city, flightCode, search) =>
	city.toLowerCase().includes(search.toLowerCase()) ||
	flightCode.toLowerCase().includes(search.toLowerCase());

export function convertDataBody(flights, pathType, search) {
	const flightsToday = flights[pathType]
		// .filter(({ actual }) => actual && moment(actual).format('DD-MM-Y') === currentDay)
		.filter(el => {
			console.log(el);
			if (el['airportToID.city'] === 'Куопіо') {
				console.log(el);
				console.log(el['airportToID.city']);
				console.log(el.actual);
				console.log(moment.utc(el.actual).format('DD-MM-Y'));
			}
			return el.actual && moment(el.actual).format('DD-MM-Y') === currentDay;
		})
		.map(flight => extractFlightsData(flight, pathType))
		.sort((a, b) => compareTime(a, b));

	return !search
		? flightsToday
		: flightsToday.filter(({ city, flightCode }) => compareSearch(city, flightCode, search));
}
