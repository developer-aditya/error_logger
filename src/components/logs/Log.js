import React, { useState, useEffect } from 'react';
import Preloader from '../layouts/Preloader';
import axios from 'axios';
import LogItem from './LogItem.js';

const Log = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
		//   eslint-disable-next-line
	}, []);

	const getLogs = async () => {
		setLoading(true);
		try {
			const options = {
				url: '/logs',
				method: 'GET',
				timeout: 3000,
			};
			const res = await axios(options);
			setLogs(res.data);
			setLoading(false);
		} catch (err) {
			setLoading(false);
		}
	};

	if (loading) return <Preloader />;

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{logs.length > 0 ? (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			) : (
				<p className='center'>No Logs to show...</p>
			)}
		</ul>
	);
};

export default Log;
