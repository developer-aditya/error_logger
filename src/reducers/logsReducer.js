import { GET_LOGS, SET_LOADING, LOGS_ERROR } from '../actions/types.js';

const intialState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
};

const logsReducer = (state = intialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case GET_LOGS:
			return { ...state, logs: action.payload, error: null };
		case LOGS_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default logsReducer;
