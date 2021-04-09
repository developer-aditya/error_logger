import React, { useEffect } from 'react';
import Preloader from '../layouts/Preloader';
import LogItem from './LogItem.js';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getLogs } from '../../actions/logsAction';

const Log = (props) => {
	useEffect(() => {
		props.getLogs();
		//   eslint-disable-next-line
	}, []);

	if (props.logsState.loading) return <Preloader />;

	return (
		<ul className='collection with-header'>
			<li className='collection-header'>
				<h4 className='center'>System Logs</h4>
			</li>
			{props.logsState.logs.length !== 0 ? (
				props.logsState.logs.map((log) => (
					<LogItem log={log} key={log.id} />
				))
			) : (
				<p className='center'>No Logs to show...</p>
			)}
		</ul>
	);
};

Log.propTypes = {
	logsState: PropTypes.object.isRequired,
	getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ logsState: state.logs });

export default connect(mapStateToProps, { getLogs })(Log);

// Connect encapsulate all action & log_state_value(object returned from mapStateToProps) into a props and sends to Log Component
