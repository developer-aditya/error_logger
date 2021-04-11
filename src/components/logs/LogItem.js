import React from 'react';

import { deleteLogs, setCurrent } from '../../actions/logsAction';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min';

const LogItem = ({ log, deleteLogs, setCurrent }) => {
	const date = new Date(log.date);
	const deleteLogsInComponent = (id) => {
		deleteLogs(id);
		M.toast({ html: 'Log Deleted Sucessfully...' });
	};
	const setCurrentInComponent = (log) => {
		setCurrent(log);
	};

	return (
		<li className='collection-item'>
			<div>
				<a
					href='#update-log'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
					onClick={(e) => setCurrentInComponent(log)}
				>
					{log.message}
				</a>
				<br />
			</div>
			<span className='grey-text'>
				<strong className='black-text'>ID: #{log.id}</strong> last updated
				by <span className='black-text'>{log.tech}</span> on{' '}
				{date.toLocaleString()}
			</span>
			<a
				href='#delete-log'
				className='secondary-content'
				onClick={(e) => deleteLogsInComponent(log.id)}
			>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLogs: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLogs, setCurrent })(LogItem);
