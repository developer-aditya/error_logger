import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import { composeWithDevTools } from 'redux-devtools-extension';

const intialAppLevelState = {};

const middleware = [thunk];

const store = createStore(
	rootReducer,
	intialAppLevelState,
	composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
