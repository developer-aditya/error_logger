import axios from 'axios';
import { GET_LOGS, SET_LOADING, ADD_LOGS, LOGS_ERROR } from './types';

// Getting all logs from DB
export const getLogs = () => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'GET',
			url: '/logs',
			timeout: 4000,
		};
		const res = await axios(options);
		setLoading(false);
		dispatch({ type: GET_LOGS, payload: res.data });
	} catch (error) {
		setLoading(false);
		dispatch({ type: LOGS_ERROR, payload: error.message });
	}
};

// 404 not adding log

// Adding New logs to DB
export const addLogs = (newLog) => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'POST',
			data: newLog,
			headers: {
				'Content-Type': 'application/json',
			},
			url: '/logs',
			timeout: 4000,
		};
		const res = await axios(options);
		setLoading(false);
		dispatch({ type: ADD_LOGS, payload: res.data });
	} catch (error) {
		setLoading(false);
		dispatch({ type: LOGS_ERROR, payload: error.message });
	}
};

// Setting loading values
export const setLoading = (check) => {
	return {
		type: SET_LOADING,
		payload: check,
	};
};
