import React from 'react';
import PropTypes from 'prop-types';

const TechnicianItem = ({ tech }) => {
	return (
		<li className='collection-item'>
			{`${tech.firstName} ${tech.lastName}`}
			<a href='#delete-tech' className='secondary-content'>
				<i className='material-icons grey-text'>delete</i>
			</a>
		</li>
	);
};

TechnicianItem.propTypes = {
	tech: PropTypes.object.isRequired,
};

export default TechnicianItem;
