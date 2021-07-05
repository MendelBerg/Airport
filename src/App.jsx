/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
import React from 'react';
import { Provider } from 'react-redux';

import Header from './flights/components/header/Header.jsx';
import Main from './flights/components/main/Main.jsx';
import store from './store';

const App = () => {
	return (
		<>
			<Header />
			<Provider store={store}>
				<Main />
			</Provider>
		</>
	);
};

export default App;
