import type {ObjectOfAnyToAnyT} from '../../utils/types/object';
import {createReducer} from '../../utils/redux';
import actions from './actions';
import initState from './state';

const reduceMap: ObjectOfAnyToAnyT = {
    [actions.ping]: () => ({isPinging: true}),
    [actions.pong]: () => ({isPinging: false}),
};

export default createReducer(reduceMap)(initState);
