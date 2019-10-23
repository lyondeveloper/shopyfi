import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// sagaMiddleware.run();

export const persistor = persistStore(store);

export default { store, persistor };
