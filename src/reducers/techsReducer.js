import {
	GET_TECHS,
	SET_LOADING,
	ADD_TECHS,
	TECHS_ERROR,
	DELETE_TECHS,
} from '../actions/types.js';

const intialState = {
	techs: [],
	error: null,
	loading: false,
};

const techsReducer = (state = intialState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { ...state, loading: action.payload };
		case GET_TECHS:
			return { ...state, techs: action.payload, error: null };
		case ADD_TECHS:
			return {
				...state,
				techs: [...state.techs, action.payload],
				error: null,
			};
		case DELETE_TECHS:
			return {
				...state,
				techs: state.techs.filter(
					(element) => element.id !== action.payload,
				),
				error: null,
			};
		case TECHS_ERROR:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};

export default techsReducer;
