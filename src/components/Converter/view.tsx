import type {ElementType} from 'react';
import type {AnyToAny2T} from '../../utils/types/functions';
import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';
import {fileToBase64} from '../../utils/file';
import {pipe, pipeSafeAsync, I, B, K} from '../../utils/combinators';
import {sendToOCRAction, fetchByIdAction, handleErrorAction} from './actions';
import {fetchStatusById, fetchConvert} from '../../services';
import {climb} from '../../utils/object';
import {composeWithPersist} from '../../utils/event';
// import {log} from '../../utils/supervisors';

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

const InitState = () => useSelector(I, shallowEqual);
const InitDispatch = B(B)(useDispatch);

const Converter: ElementType = () => {
    const state = InitState();
    const {id, status, url, error} = state;
    const dispatch = InitDispatch();
    const fileLoadHandler = composeWithPersist(
        handleInputChange({dispatch, state}),
    );
    const statusHandler = handleButtonClick({dispatch, state});
    return (
        <div>
            <div>{id}</div>
            <div>{status}</div>
            <div>{status === 'finish' && <a href={url}>Download</a>}</div>
            <div>{error}</div>
            <input type="file" onChange={fileLoadHandler} />
            <input type="button" onClick={statusHandler} value="second" />
        </div>
    );
};

Converter.propTypes = {
    store: PropTypes.object,
};

export default Converter;
