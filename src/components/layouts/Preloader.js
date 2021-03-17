import React from 'react';

const Preloader = () => {
	return (
		<div className='valign-wrapper' style={{ height: '75vh' }}>
			<div className='progress'>
				<div className='indeterminate'></div>
			</div>
		</div>
	);
};

export default Preloader;
