import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import initialState from '../reducers/initailState';

const logger = createLogger({
	collapsed: true
});

const composeEnhancers =
	typeof window === 'object' &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhancers(
	applyMiddleware(
		thunk,
		logger,
		reduxImmutableStateInvariant()
	)
);

const store = createStore(
	rootReducer,
	initialState,
	enhancer);

export default store;