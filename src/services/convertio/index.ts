import type {AnyToAnyT, AnyToAny2T} from '../../utils/types/functions';
import http from '../../utils/http';
import {host, api, token} from '../../../configs/convertio.config';

const API_URL = `${host}/${api}`;

const convertItem: AnyToAny2T = (params = {}) =>
    http.post(API_URL, {
        apikey: token,
        input: params.input ?? 'base64',
        file: params.file,
        outputformat: params.outputformat ?? 'TXT',
        filename: params.filename,
        options: params.options ?? {
            ocr_enabled: true,
            ocr_settings: {
                langs: ['eng', 'rus'],
            },
        },
    });

// convertItem().then(console.log).catch(console.error);

const getItems: AnyToAnyT = ({status, count} = {}) =>
    http.post(`${API_URL}/list`, {
        apikey: token,
        status,
        count,
    });

// getItems().then(console.log).catch(console.error);

const getItemStatusById: AnyToAnyT = id => http.get(`${API_URL}/${id}/status`);

// getItemById('916f4d7ed093714c03281338f94c1494')
//     .then(console.log)
//     .catch(console.error);

const getItemContentById: AnyToAnyT = id => http.get(`${API_URL}/${id}/dl`);

// getItemContentById('916f4d7ed093714c03281338f94c1494')
//     .then(console.log)
//     .catch(console.error);

const deleteItemById: AnyToAnyT = id => http.delete(`${API_URL}/${id}`);

export default {
    convertItem,
    getItems,
    getItemStatusById,
    getItemContentById,
    deleteItemById,
};
