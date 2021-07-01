/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tasksActions from '../../tasks.actions';
import Options from './Options.jsx';
import Table from './table/Table.jsx';
import './scoreboard.scss';
import {tasksListSelector} from '../../tasks.selectors';

const Scoreboard = ({tasks, getTaskList}) => {
  return (
		<div className="scoreboard">
			<BrowserRouter>
					<Switch>
						<Route exact path="/">
							<Options getTaskList={getTaskList} />
						</Route>
						<Route path="/:flightsFlag">
							<Options getTaskList={getTaskList} />
						</Route>
					</Switch>
				</BrowserRouter>
				<Table flights={tasks} />
		</div>
  );
};

const mapDispatch = {
  getTaskList: tasksActions.getTaskList,
};

const mapState = state => {
  return {
    tasks: tasksListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(Scoreboard);
