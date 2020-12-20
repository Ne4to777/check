import {createStore, combineReducers, applyMiddleware} from 'redux';
import converterReducer from '../components/Converter/reducer';
import immutableStateMiddleware from 'redux-immutable-state-invariant';

const reducer = combineReducers({
    converter: converterReducer,
});

const middleware = [immutableStateMiddleware()];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
