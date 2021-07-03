import { FLIGHTS_LIST_RECIEVED, INPUT_VALUE_CHANGED, PATH_CHANGED } from './tasks.actions';

const initialState = {
	tasksList: [],
	value: '',
	path: '',
};

const tasksReducer = (state = initialState, action) => {
	switch (action.type) {
		case FLIGHTS_LIST_RECIEVED:
			return {
				...state,
				tasksList: action.payload.tasksList,
			};
		case INPUT_VALUE_CHANGED:
			return {
				...state,
				value: action.payload.value,
			};
		case PATH_CHANGED:
			return {
				...state,
				path: action.payload.path,
			};
		default:
			return state;
	}
};

export default tasksReducer;
