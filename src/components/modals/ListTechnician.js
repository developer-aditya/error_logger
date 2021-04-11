import React from 'react';
import TechnicianItem from './TechnicianItem';

const ListTechnician = () => {
	return (
		<div id='list-technician' className='modal' style={modalStyle}>
			<div className='modal-content'>
				{
					<ul className='collection with-header'>
						<li className='collection-header' key={0}>
							<h4 className='center'>Technicians</h4>
						</li>
						<TechnicianItem />
					</ul>
				}
			</div>
		</div>
	);
};

const modalStyle = {
	width: '50%',
	height: '75%',
};

export default ListTechnician;
