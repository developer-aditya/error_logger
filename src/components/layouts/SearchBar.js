import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { searchLogs } from '../../actions/logsAction';
import { connect } from 'react-redux';

const SearchBar = ({ searchLogs }) => {
	const text = useRef('');
	const searchLogsInComponent = () => {
		searchLogs(text.current.value);
	};
	const clearSearchBox = () => {
		text.current.value = '';
		searchLogs(text.current.value);
	};

	return (
		<nav className='blue'>
			<div className='nav-wrapper'>
				<form>
					<div className='input-field'>
						<input
							id='search'
							ref={text}
							type='search'
							placeholder='Search Logs...'
							onChange={searchLogsInComponent}
							required
						/>
						<label className='label-icon' htmlFor='search'>
							<i className='material-icons'>search</i>
						</label>
						<i className='material-icons' onClick={clearSearchBox}>
							close
						</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

SearchBar.propTypes = {
	searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
