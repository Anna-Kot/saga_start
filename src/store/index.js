import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import reducer from './post/reducer';
import { sagaWatcher } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(sagaWatcher);

export default store;
