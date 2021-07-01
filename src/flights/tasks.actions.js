// import { tasksListSelector } from './tasks.selectors';
import {fetchFlights, convertDataBody} from './flightsGateway';

export const FLIGHTS_LIST_RECIEVED = 'FLIGHTS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => {
  const action = {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      tasksList,
    },
  };

  return action;
};

export const getTaskList = (flag) => {
  const thunkAction = function (dispatch) {
    fetchFlights().then(tasksList => dispatch(tasksListRecieved(convertDataBody(tasksList.body, flag))));
  };

  return thunkAction;
};