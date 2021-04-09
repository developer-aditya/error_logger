import axios from 'axios';
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
} from './types';

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

// Getting all logs from DB
export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'GET',
			url: `/logs?q=${text}`,
			timeout: 4000,
		};
		const res = await axios(options);
		setLoading(false);
		dispatch({ type: SEARCH_LOGS, payload: res.data });
	} catch (error) {
		setLoading(false);
		dispatch({ type: LOGS_ERROR, payload: error.message });
	}
};

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

// Deleting all logs from DB
export const deleteLogs = (id) => async (dispatch) => {
	try {
		setLoading(true);
		const options = {
			method: 'DELETE',
			url: `/logs/${id}`,
			timeout: 4000,
		};
		await axios(options);
		setLoading(false);
		dispatch({ type: DELETE_LOGS, payload: id });
	} catch (error) {
		setLoading(false);
		dispatch({ type: LOGS_ERROR, payload: error.message });
	}
};

// Updating logs from DB
export const updateLogs = (log) => async (dispatch) => {
	try {
		const options = {
			method: 'PUT',
			url: `/logs/${log.id}`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: log,
			timeout: 4000,
		};
		const res = await axios(options);
		dispatch({ type: UPDATE_LOGS, payload: res.data });
	} catch (error) {
		dispatch({ type: LOGS_ERROR, payload: error.message });
	}
};

// Setting Current Selected log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

// Clearing Current Selected log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Setting loading values
export const setLoading = (check) => {
	return {
		type: SET_LOADING,
		payload: check,
	};
};
