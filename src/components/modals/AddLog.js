import React, { useState } from 'react';

import { connect } from 'react-redux';
import { addLogs } from '../../actions/logsAction';

import PropTypes from 'prop-types';

import M from '../../../node_modules/materialize-css/dist/js/materialize.min';

const AddLog = (props) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');

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
			};
			props.addLogs(newLog);
			setMessage('');
			setAttention(false);
			document.getElementById('tech').value = '0';
			setTech('');
			M.toast({ html: 'Log Added Successfully...' });
		}
	};

	return (
		<div id='add-log' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>Enter System Log</h4>
				<div className='row '>
					<div className='input-feild col s12'>
						<label htmlFor='message'>Log Message</label>
						<input
							type='text'
							name='message'
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-field col s12'>
						<select
							name='tech'
							id='tech'
							onChange={(e) => {
								setTech(e.target.value);
							}}
							value={'0'}
						>
							<option value='0' disabled>
								Select Technician
							</option>
							<option value='1'>Option 1</option>
							<option value='2'>Option 2</option>
							<option value='3'>Option 3</option>
						</select>
						<label htmlFor='tech'>Technician</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-feild col s12'>
						<label htmlFor='attention'>
							<input
								type='checkbox'
								name='attention'
								id='attention'
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
							Add Log
							<i className='material-icons right'>send</i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

AddLog.propTypes = {
	addLogs: PropTypes.func.isRequired,
};

const modalStyle = {
	width: '60%',
	height: '75%',
};

export default connect(null, { addLogs })(AddLog);

// mapStateToProps will be null as there is no use of app level state in this component, only action is used
