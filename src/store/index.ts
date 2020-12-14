import {createStore} from 'redux';
import reducer from '../reducers';
const initialState = {id: '', error: '', status: '', url: ''};
const store = createStore(reducer, initialState);
export default store;
