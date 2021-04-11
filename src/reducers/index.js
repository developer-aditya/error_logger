import { combineReducers } from 'redux';
import logsReducer from './logsReducer';
import techsReducer from './techsReducer';

const rootReducer = combineReducers({
	logs: logsReducer,
	techs: techsReducer,
});

export default rootReducer;
