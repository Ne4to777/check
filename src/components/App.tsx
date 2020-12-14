import React from 'react';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import type {ElementType} from 'react';
import type {AnyToAny2T} from '../utils/types/functions';
import {fileToBase64} from '../file';
import {pipe, pipeSafeAsync, I, B, K, C} from '../utils/combinators';
import {sendToOCRAction, fetchByIdAction, handleErrorAction} from '../actions';
import {fetchStatusById, fetchConvert} from '../services';
import {climb} from '../utils/object';
import {composeWithPersist} from '../utils/event';
// import {log} from '../utils/supervisors';

const getFileFromEvent = climb(['target', 'files', 0]);
const getErrorFromResponse = climb(['data', 'error']);
const getIdFromFromResponse = climb(['data', 'data', 'id']);

const actFetchError = pipe([getErrorFromResponse, handleErrorAction]);
const actSendToOCR = pipe([getIdFromFromResponse, sendToOCRAction]);

const actFetchById = pipe([climb(['data', 'data']), fetchByIdAction]);

const handleInputChange: AnyToAny2T = ({dispatch}) =>
    pipeSafeAsync([
        [getFileFromEvent],
        [fileToBase64],
        [fetchConvert, dispatch(actFetchError)],
        [dispatch(actSendToOCR)],
    ]);

const handleButtonClick: AnyToAny2T = ({dispatch, state: {id}}) =>
    pipeSafeAsync([
        [K(id)],
        [fetchStatusById, dispatch(actFetchError)],
        [dispatch(actFetchById)],
    ]);

const AppComponent: ElementType = () => {
    const state = useSelector(I, shallowEqual);
    const dispatch = B(useDispatch());
    return (
        <div>
            <div>{state.id}</div>
            <div>{state.status}</div>
            <div>
                {state.status === 'finish' && <a href={state.url}>Download</a>}
            </div>
            <div>{state.error}</div>
            <input
                type="file"
                onChange={composeWithPersist(
                    handleInputChange({dispatch, state}),
                )}
            />
            <input
                type="button"
                onClick={handleButtonClick({dispatch, state})}
                value="second"
            />
        </div>
    );
};

export default AppComponent;
