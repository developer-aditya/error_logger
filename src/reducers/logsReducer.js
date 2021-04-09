import {
	GET_LOGS,
	SET_LOADING,
	ADD_LOGS,
	LOGS_ERROR,
	DELETE_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_LOGS,
	SEARCH_LOGS,
} from '../actions/types.js';

const intialState = {
	logs: [],
	current: {},
	loading: false,
	error: null,
};

const logsReducer = (state = intialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case SET_CURRENT:
			return { ...state, current: action.payload };
		case CLEAR_CURRENT:
			return { ...state, current: {} };
		case GET_LOGS:
			return { ...state, logs: action.payload, error: null };
		case SEARCH_LOGS:
			return { ...state, logs: action.payload, error: null };
		case ADD_LOGS:
			return {
				...state,
				logs: [...state.logs, action.payload],
				error: null,
			};
		case UPDATE_LOGS:
			return {
				...state,
				logs: state.logs.map((element) =>
					element.id === action.payload.id ? action.payload : element,
				),
				error: null,
			};

		case DELETE_LOGS:
			return {
				...state,
				logs: state.logs.filter((element) => element.id !== action.payload),
				error: null,
			};
		case LOGS_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default logsReducer;
