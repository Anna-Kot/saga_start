import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import postsReducer from './post/reducer';
import { sagaWatcher } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  Posts: postsReducer,
});

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagaWatcher);

export default store;
