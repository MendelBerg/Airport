/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { connect } from 'react-redux';
import * as tasksActions from '../../tasks.actions';
import Options from './Options.jsx';
import Table from './table/Table.jsx';
import './scoreboard.scss';
import {tasksListSelector} from '../../tasks.selectors';

const Scoreboard = ({tasks, getTaskList}) => {
  return (
		<div className="scoreboard">
			<Options getTaskList={getTaskList} />
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
