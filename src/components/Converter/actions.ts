import {createAction} from 'redux-actions';

const SEND_TO_OCR = '#SEND_TO_OCR';
const FETCH_BY_ID = '#FETCH_BY_ID';
const CATCH_ERROR = '#CATCH_ERROR';

const sendToOCRAction = createAction(SEND_TO_OCR);
const fetchByIdAction = createAction(FETCH_BY_ID);
const handleErrorAction = createAction(CATCH_ERROR);

export {
    sendToOCRAction,
    fetchByIdAction,
    handleErrorAction,
    SEND_TO_OCR,
    FETCH_BY_ID,
    CATCH_ERROR,
};
