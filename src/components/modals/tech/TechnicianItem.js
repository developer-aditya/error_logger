import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getTechs, deleteTechs } from '../../../actions/techsAction';

import PropTypes from 'prop-types';
import Preloader from '../../layouts/Preloader';

const TechnicianItem = ({
	techs: { techs, loading },
	getTechs,
	deleteTechs,
}) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	const deleteTechnician = (id) => {
		deleteTechs(id);
	};

	if (loading) {
		return <Preloader />;
	}

	return (
		!loading &&
		techs.length !== 0 &&
		techs.map((tech) => (
			<li className='collection-item' key={tech.id}>
				{`${tech.firstName} ${tech.lastName}`}
				<a
					href='#delete-tech'
					className='secondary-content'
					onClick={(e) => deleteTechnician(tech.id)}
				>
					<i className='material-icons grey-text'>delete</i>
				</a>
			</li>
		))
	);
};

TechnicianItem.propTypes = {
	techs: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired,
	deleteTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	techs: state.techs,
});

export default connect(mapStateToProps, { getTechs, deleteTechs })(
	TechnicianItem,
);
