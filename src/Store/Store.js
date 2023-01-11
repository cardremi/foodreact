import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {SagaWatcher} from './SagaWatcher';
import {AllReducer} from './AllReducer';

//setting for redux and middleware saga

const SagaMiddleware = createSagaMiddleware();
const AllMiddleware = applyMiddleware(SagaMiddleware, logger);

export const Store = createStore(AllReducer, AllMiddleware);

SagaMiddleware.run(SagaWatcher);
