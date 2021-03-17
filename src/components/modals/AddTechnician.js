import React, { useState } from 'react';
import M from '../../../node_modules/materialize-css/dist/js/materialize.min';

const AddTechnician = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const submitForm = () => {
		if (firstName === '' || lastName === '')
			M.toast({ html: 'Please Provide Complete Name of Technician' });
		else {
			console.log(`${firstName} ${lastName}`);
			setFirstName('');
			setLastName('');
			M.toast({ html: 'Technician Added Successfully...' });
		}
	};

	return (
		<div id='add-technician' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<h4>New Technician</h4>
				<div className='row'>
					<div className='input-feild col s12'>
						<label htmlFor='firstName'>First Name</label>
						<input
							type='text'
							name='firstName'
							id='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
				</div>
				<div className='row'>
					<div className='input-feild col s12'>
						<label htmlFor='lastName'>Last Name</label>
						<input
							type='text'
							name='lastName'
							id='lastName'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
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
							Add Technician
							<i className='material-icons right'>send</i>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '50%',
	height: '75%',
};

export default AddTechnician;
