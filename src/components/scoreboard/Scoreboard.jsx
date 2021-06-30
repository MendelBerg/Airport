/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import Options from './Options.jsx';
import Table from './table/Table.jsx';
import './scoreboard.scss';

const Scoreboard = () => {
  return (
		<div className="scoreboard">
			<Options />
			<Table />
		</div>
  );
};

export default Scoreboard;
