import React, { useState } from 'react';

const AddLog = () => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState('');
	console.log(message, attention, tech);

	const submitForm = () => {};

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
							defaultValue={'0'}
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
			</div>
			<div className='modal-footer'>
				<button
					class='btn waves-effect waves-light blue modal-close'
					type='submit'
					name='action'
					onSubmit={submitForm}
				>
					Submit
					<i class='material-icons right'>send</i>
				</button>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%',
};

export default AddLog;
