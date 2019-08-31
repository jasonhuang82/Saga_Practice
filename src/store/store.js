import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from '../reducers';
import logger  from 'redux-logger';
// saga
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas'



const isDev = process.env.NODE_ENV === 'development';
const middlewares = [];
const composeEnhancers = (() => {
    const hasDevTool = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    
    if (hasDevTool && isDev) {
        return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
    return compose;
})()

if (isDev) {
    middlewares.push(logger)
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const middlewareEnhancer = composeEnhancers(
    applyMiddleware(...middlewares)
)
const store = createStore(
    appReducer,
    middlewareEnhancer,
);

sagaMiddleware.run(rootSaga);

export default store;