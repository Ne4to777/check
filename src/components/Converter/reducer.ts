import type {ObjectOfAnyToAnyT} from '../../utils/types/object';
import {createReducer} from '../../utils/redux';
import {SEND_TO_OCR, FETCH_BY_ID, CATCH_ERROR} from './actions';
import state from './state';

const reduceMap: ObjectOfAnyToAnyT = {
    [SEND_TO_OCR]: ({payload}) => ({id: payload}),
    [FETCH_BY_ID]: ({payload}) => ({
        url: payload.output.url,
        status: payload.step,
    }),
    //@ts-ignore
    [CATCH_ERROR]: ({payload}) => console.log(payload) || {error: payload},
};

export default createReducer(reduceMap)(state);
