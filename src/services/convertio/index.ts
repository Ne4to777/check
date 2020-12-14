import axios from 'axios';
import {pipeAsync} from '../../utils/combinators';
//@ts-ignore
import {host, api, token} from '../../../configs/convertio.config';
import type {AnyToAnyT} from '../../utils/types/functions';
import {log} from '../../utils/supervisors';

const url = `${host}/${api}`;

const fetchConvert: AnyToAnyT = file =>
    axios({
        method: 'post',
        url: url,
        data: {
            apikey: token,
            input: 'base64',
            file,
            // file:
            //     'https://raw.githubusercontent.com/Ne4to777/Ne4to777.github.io/main/assets/test.jpg',
            outputformat: 'TXT',
            filename: 'test.jpg',
            options: {
                ocr_enabled: true,
                ocr_settings: {
                    langs: ['eng', 'rus'],
                },
            },
        },
    }).catch(({response}) => {
        throw response;
    });

const fetchStatusById: AnyToAnyT = id =>
    axios({
        method: 'get',
        url: `${url}/${id}/status`,
        data: {},
    }).catch(({response}) => {
        throw response;
    });

const fetchContentById: AnyToAnyT = id =>
    axios({
        method: 'get',
        url: `${url}/${id}/dl`,
        // data: {},
    }).catch(({response}) => {
        throw response;
    });

const getIdFromResponse: AnyToAnyT = response => response.data.data.id;
const getContentFromResponse: AnyToAnyT = response =>
    response.data.data.content;
const fetchContentBySource = pipeAsync([
    fetchConvert,
    log,
    getIdFromResponse,
    log,
    fetchContentById,
    // x => fetchContentById('bc6fac0d6baa6969cb6226b72ff7e499'),
    log,
    // getContentFromResponse,
    // log,
]);

export {fetchContentBySource, fetchStatusById, fetchConvert};
