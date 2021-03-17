import React, { useEffect } from 'react';

import Log from './components/logs/Log';
import FloatingButton from './components/layouts/FloatingButton';
import SearchBar from './components/layouts/SearchBar';

import AddLog from './components/modals/AddLog';
import AddTechnician from './components/modals/AddTechnician';
import DeleteTechnician from './components/modals/DeleteTechnician';

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
		<div className='App'>
			<SearchBar />
			<div className='container'>
				<FloatingButton />
				<Log />
				<AddLog />
				<AddTechnician />
				<DeleteTechnician />
			</div>
		</div>
	);
};

export default App;
