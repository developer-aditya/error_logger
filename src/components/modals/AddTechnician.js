import React from 'react';

const AddTechnician = () => {
	return (
		<div id='add-technician' className='modal'>
			<div className='modal-content'>
				<h4>Modal Header</h4>
				<p>A bunch of text</p>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					className='modal-close waves-effect waves-green btn-flat'
				>
					Agree
				</a>
			</div>
		</div>
	);
};

export default AddTechnician;
