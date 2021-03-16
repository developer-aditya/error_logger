import React from 'react';
import Log from './components/logs/Log';
import SearchBar from './components/layouts/SearchBar';

const App = () => {
	return (
		<div className='App'>
			<SearchBar />
			<div className='container'>
				<Log />
			</div>
		</div>
	);
};

export default App;
