import type {ObjectOfAnyToAnyT} from '../../utils/types/object';
import {createReducer} from '../../utils/redux';
import actions from './actions';
import initState from './state';

const reduceMap: ObjectOfAnyToAnyT = {
    [actions.increment]: ({state}) => ({value: state.value + 1}),
    [actions.decrement]: ({state}) => ({value: state.value - 1}),
};

export default createReducer(reduceMap)(initState);
