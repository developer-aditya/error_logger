import React from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log }) => {
	const date = new Date(log.date);
	return (
		<li className='collection-item'>
			<div>
				<a
					href='#add-log'
					className={`modal-trigger ${
						log.attention ? 'red-text' : 'blue-text'
					}`}
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
			<a href='#delete-log' className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
};

export default LogItem;
