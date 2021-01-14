import type {AnyToAnyT, AnyToAny2T} from '../types/functions';
import axios from 'axios';
import {climb} from '../object';
import {pipe} from '../combinators';

const HTTP_METHODS = ['get', 'post', 'delete'];

const throwError: AnyToAnyT = x => {
    throw new Error(x);
};

const getHttpMethod: AnyToAny2T = x => (url, params = {}) =>
    ((axios as any)[x] as any)(url, params)
        .then(climb(['data', 'data']))
        .catch(pipe([climb(['response', 'data', 'error']), throwError]));

const reducer: AnyToAnyT = (acc, x) => {
    acc[x] = getHttpMethod(x);
    return acc;
};

export default HTTP_METHODS.reduce(reducer, {});
