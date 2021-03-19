import { combineReducers } from 'redux';
import logsReducer from './logsReducer';

const rootReducer = combineReducers({
	logs: logsReducer,
});

export default rootReducer;
