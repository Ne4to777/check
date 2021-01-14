import reducer from './reducer';
import epic from './epic';
import immutableStateMiddleware from 'redux-immutable-state-invariant';
import {createEpicMiddleware} from 'redux-observable';
import {configureStore} from '@reduxjs/toolkit';

const epicMiddleware = createEpicMiddleware();

const middleware = [immutableStateMiddleware(), epicMiddleware];

const store = configureStore({
    reducer,
    middleware,
});

epicMiddleware.run(epic);

export default store;
