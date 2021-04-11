import React, { useState, useEffect } from 'react';
import TechSelectOption from './TechSelectOptions';

import { connect } from 'react-redux';
import { updateLogs } from '../../actions/logsAction';

import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min';

const UpdateLog = ({ current, updateLogs }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		if (JSON.stringify(current) !== '{}') {
			setMessage(current.message);
			setTech(current.tech);
			setAttention(current.attention);
		}
	}, [current]);

	// state reset works but form does not get reset
	const submitForm = () => {
		if (message === '' || tech === '')
			M.toast({ html: 'Please Add Message and Technician' });
		else {
			const newLog = {
				message,
				attention,
				tech,
				date: new Date(Date.now()),
				id: current.id,
			};
			updateLogs(newLog);
			setMessage('');
			setAttention(false);
			setTech('');
			M.toast({ html: 'Log Updated Successfully...' });
		}
	};

	return (
		<div id='update-log' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Update System Log</h4>
				<br />
				<div className='row '>
					<div className='input-feild col s12'>
						<label htmlFor='message-update'>Log Message</label>
						<input
							type='text'
							name='message-update'
							id='message-update'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						<select
							name='tech-update'
							id='tech-update'
							className='browser-default'
							onChange={(e) => {
								setTech(e.target.value);
							}}
							value={tech}
						>
							<option key={0} value='0' disabled>
								Select Technician
							</option>
							<TechSelectOption />
						</select>
						{/* <label htmlFor='tech-update'>Technician</label> */}
					</div>
				</div>
				<div className='row'>
					<div className='input-feild col s12'>
						<label htmlFor='attention-update'>
							<input
								type='checkbox'
								name='attention-update'
								id='attention-update'
								checked={attention}
								onChange={(e) => setAttention(!attention)}
							/>
							<span className='grey-text'>Attention Required</span>
						</label>
					</div>
				</div>

				<div className='row'>
					<div className='input-feild col s12'>
						<button
							className='btn waves-effect waves-light blue modal-close secondary-content'
							type='submit'
							name='action'
							onClick={submitForm}
						>
							Update Log
							<i className='material-icons right'>send</i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '60%',
	height: '75%',
};

UpdateLog.propTypes = {
	updateLogs: PropTypes.func.isRequired,
	current: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	current: state.logs.current,
});

export default connect(mapStateToProps, { updateLogs })(UpdateLog);

// mapStateToProps will be null as there is no use of app level state in this component, only action is used
