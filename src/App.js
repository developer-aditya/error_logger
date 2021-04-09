import React, { useEffect } from 'react';

import Log from './components/logs/Log';
import FloatingButton from './components/layouts/FloatingButton';
import SearchBar from './components/layouts/SearchBar';

import AddLog from './components/modals/AddLog';
import UpdateLog from './components/modals/UpdateLog';
import AddTechnician from './components/modals/AddTechnician';
import ListTechnician from './components/modals/ListTechnician';

import { Provider } from 'react-redux';
import store from './store';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.min';

const App = () => {
	useEffect(() => {
		M.AutoInit();

		let elemFixedButton = document.querySelectorAll('.fixed-action-btn');
		M.FloatingActionButton.init(elemFixedButton, {
			direction: 'left',
		});

		let elemSelect = document.querySelectorAll('select');
		M.FormSelect.init(elemSelect);

		//eslint-disable-next-line
	}, []);

	return (
		<Provider store={store}>
			<div className='App'>
				<SearchBar />
				<div className='container'>
					<FloatingButton />
					<Log />
					<AddLog />
					<UpdateLog />
					<AddTechnician />
					<ListTechnician />
				</div>
			</div>
		</Provider>
	);
};

export default App;
