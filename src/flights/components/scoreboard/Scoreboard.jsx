/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import * as tasksActions from '../../tasks.actions';
import Options from './Options.jsx';
import Table from './table/Table.jsx';
import './scoreboard.scss';
import { tasksListSelector, searchSelector } from '../../tasks.selectors';

const Scoreboard = ({ tasks, getTaskList, pathChanged, search }) => {
	return (
		<div className="scoreboard">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Options pathChanged={pathChanged} search={search} getTaskList={getTaskList} />
					</Route>
					<Route path="/:flightsFlag">
						<Options pathChanged={pathChanged} getTaskList={getTaskList} search={search} />
					</Route>
				</Switch>
			</BrowserRouter>
			<Table flights={tasks} />
		</div>
	);
};

const mapDispatch = {
	getTaskList: tasksActions.getTaskList,
	pathChanged: tasksActions.pathChanged,
};

const mapState = state => {
	return {
		tasks: tasksListSelector(state),
		search: searchSelector(state),
	};
};

export default connect(mapState, mapDispatch)(Scoreboard);
