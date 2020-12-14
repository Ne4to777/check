import type {AnyToAnyT, AnyToAny2T} from '../utils/types/functions';
import {SEND_TO_OCR, FETCH_BY_ID, CATCH_ERROR} from './types';

const actionCreator: AnyToAny2T = type => payload => ({type, payload});

const sendToOCRAction: AnyToAnyT = data => ({
    type: SEND_TO_OCR,
    payload: {
        id: data,
    },
}); //actionCreator(SEND_TO_OCR);
const fetchByIdAction: AnyToAnyT = data => ({
    type: FETCH_BY_ID,
    payload: {
        url: data.output.url,
        status: data.step,
    },
}); //actionCreator(FETCH_BY_ID);
const handleErrorAction: AnyToAnyT = data => ({
    type: CATCH_ERROR,
    payload: {
        error: data,
    },
}); //actionCreator(CATCH_ERROR);

export {sendToOCRAction, fetchByIdAction, handleErrorAction};
