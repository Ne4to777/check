import type {AnyToAnyT, AnyToAny2T} from '../../../utils/types/functions';
import {readFileSync} from 'fs';
import {pipe, pipeAsync, K} from '../../../utils/combinators';
import {climb} from '../../../utils/object';
import {toBe} from '../../../utils/test';
import http from '..';
import responseConvert from './responses/convert.json';
import responseStatus from './responses/status.json';
import responseContent from './responses/content.json';

const mockAxios: AnyToAnyT = response =>
    jest.mock('axios', () => () => new Promise(resolve => resolve(response)));
const unmockAxios: AnyToAnyT = () => jest.unmock('axios');

const checkKeys = pipe([climb(['data', 'data']), Object.keys, JSON.stringify]);

const checkKeysLazy = pipe([checkKeys, K]);

const checkKeysByFetch: AnyToAnyT = fetch => pipeAsync([fetch, checkKeys]);

const jpgPath = __dirname + '/images/pixel.jpg';

const jpgBase64 = readFileSync(jpgPath, {encoding: 'base64'});
const fileId = '7f491d8e28e3ac961b8de3ecdade460a';

const {
    convertItem,
    getItems,
    getItemById,
    getItemContentById,
    deleteItemById,
} = http;

afterEach(() => {
    unmockAxios();
});

describe('Convertio', () => {
    test('convertItem', () => {
        mockAxios(responseConvert);
        const fetchConvertControl = checkKeysLazy(responseConvert);
        const fetchConvertTest = checkKeysByFetch(convertItem);
        toBe(jpgBase64)(fetchConvertControl)(fetchConvertTest);
    });
    test('getItemById', () => {
        mockAxios(responseStatus);
        const fetchStatusControl = checkKeysLazy(responseStatus);
        const fetchStatusTest = checkKeysByFetch(getItemById);
        toBe(fileId)(fetchStatusControl)(fetchStatusTest);
    });
    test('getItemContentById', () => {
        mockAxios(responseContent);
        const fetchContentControl = checkKeysLazy(responseContent);
        const fetchContentTest = checkKeysByFetch(getItemContentById);
        toBe(fileId)(fetchContentControl)(fetchContentTest);
    });
});
