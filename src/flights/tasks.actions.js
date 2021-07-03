import { fetchFlights, convertDataBody } from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';
export const INPUT_VALUE_CHANGED = 'INPUT_VALUE_CHANGED';
export const PATH_CHANGED = 'PATH_CHANGED';
export const SEARCH_CHANGED = 'SEARCH_CHANGED';

export const tasksListRecieved = tasksList => {
	const action = {
		type: FLIGHTS_LIST_RECIEVED,
		payload: {
			tasksList,
		},
	};

	return action;
};

export const inputValueChanged = value => {
	const action = {
		type: INPUT_VALUE_CHANGED,
		payload: {
			value,
		},
	};

	return action;
};

export const pathChanged = path => {
	const action = {
		type: PATH_CHANGED,
		payload: {
			path,
		},
	};

	return action;
};

export const searchChanged = search => {
	const action = {
		type: SEARCH_CHANGED,
		payload: {
			search,
		},
	};

	return action;
};

export const getTaskList = (flag, value) => {
	const thunkAction = function (dispatch) {
		fetchFlights().then(tasksList =>
			dispatch(tasksListRecieved(convertDataBody(tasksList.body, flag, value))),
		);
	};

	return thunkAction;
};
