import { FLIGHTS_LIST_RECIEVED, INPUT_VALUE_CHANGED } from './tasks.actions';

const initialState = {
	tasksList: [],
	value: '',
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
		default:
			return state;
	}
};

export default tasksReducer;
