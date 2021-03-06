import React from 'react';

const FloatingButton = () => {
	return (
		<div className='fixed-action-btn'>
			<a
				href='#add-log'
				className='btn-floating btn-large blue darken-2 modal-trigger'
			>
				<i className='large material-icons'>mode_edit</i>
			</a>
			<ul>
				<li>
					<a
						href='#list-technician'
						className='btn-floating green modal-trigger'
					>
						<i className='material-icons'>person</i>
					</a>
				</li>
				<li>
					<a
						href='#add-technician'
						className='btn-floating red modal-trigger'
					>
						<i className='material-icons'>person_add</i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default FloatingButton;
