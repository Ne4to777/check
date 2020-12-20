import type {AnyToAnyT} from '../../utils/types/functions';
import axios from 'axios';
import {host, api, token} from '../../../configs/convertio.config';
// import {log} from '../../utils/supervisors';

const url = `${host}/${api}`;

const fetchConvert: AnyToAnyT = file =>
    axios({
        method: 'post',
        url,
        data: {
            apikey: token,
            input: 'base64',
            file,
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
    }).catch(({response}) => {
        throw response;
    });

const fetchContentById: AnyToAnyT = id =>
    axios({
        method: 'get',
        url: `${url}/${id}/dl`,
    }).catch(({response}) => {
        throw response;
    });

export {fetchStatusById, fetchContentById, fetchConvert};
