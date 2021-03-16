import React, { useState, useEffect } from 'react';
import Spinner from '../layouts/Spinner.js';
import axios from 'axios';

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

	if (loading) return <Spinner />;

	return (
		<ul className='collection-with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{logs.length > 0 ? (
				logs.map((log) => (
					<li className='collection-item' key={log.id}>
						{log.message}
					</li>
				))
			) : (
				<p className='center'>No Logs to show...</p>
			)}
		</ul>
	);
};

export default Log;
