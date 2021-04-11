import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { getTechs } from '../../../actions/techsAction';

import PropTypes from 'prop-types';

const TechSelectOptions = ({ getTechs, techsProp }) => {
	const [techs, setTechs] = useState(false);

	useEffect(() => {
		getTechs();
		setTechs(!techs);
		//eslint-disable-next-line
	}, []);

	// return (
	// 	<React.Fragment>
	// 		<option value='a'>a</option>
	// 		<option value='b'>b</option>
	// 		<option value='c'>c</option>
	// 	</React.Fragment>
	// );

	const html =
		!techsProp.loading &&
		techsProp.techs.length !== 0 &&
		techsProp.techs.map(function ({ id, firstName, lastName }) {
			return (
				<option key={id} value={`${firstName} ${lastName}`}>
					{firstName} {lastName}
				</option>
			);
		});
	return <React.Fragment>{html}</React.Fragment>;
};

TechSelectOptions.propTypes = {
	techsProp: PropTypes.object.isRequired,
	getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({ techsProp: state.techs });

export default connect(mapStateToProps, { getTechs })(TechSelectOptions);
