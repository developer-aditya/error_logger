import axios from 'axios';
import {
	GET_TECHS,
	SET_LOADING,
	ADD_TECHS,
	TECHS_ERROR,
	DELETE_TECHS,
} from '../actions/types.js';

// Getting all logs from DB
export const getTechs = () => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'GET',
			url: '/technicians',
			timeout: 4000,
		};
		const res = await axios(options);
		setLoading(false);
		dispatch({ type: GET_TECHS, payload: res.data });
	} catch (error) {
		setLoading(false);
		dispatch({ type: TECHS_ERROR, payload: error.message });
	}
};

// Adding New logs to DB
export const addTechs = (newTechs) => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'POST',
			data: newTechs,
			headers: {
				'Content-Type': 'application/json',
			},
			url: '/technicians',
			timeout: 4000,
		};
		const res = await axios(options);
		setLoading(false);
		dispatch({ type: ADD_TECHS, payload: res.data });
	} catch (error) {
		setLoading(false);
		dispatch({ type: TECHS_ERROR, payload: error.message });
	}
};

// Deleting all logs from DB
export const deleteTechs = (id) => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'DELETE',
			url: `/technicians/${id}`,
			timeout: 4000,
		};
		await axios(options);
		setLoading(false);
		dispatch({ type: DELETE_TECHS, payload: id });
	} catch (error) {
		setLoading(false);
		dispatch({ type: TECHS_ERROR, payload: error.message });
	}
};

// Setting loading values
export const setLoading = (check) => {
	return {
		type: SET_LOADING,
		payload: check,
	};
};
