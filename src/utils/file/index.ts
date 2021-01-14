import type {AnyToAnyT, AnyToAny2T} from '../types/functions';
import {parallel, K, I} from '../combinators';
import {methodApply} from '../object';
import {pipe} from '../combinators';
import {climb} from '../object';
import {newPromise} from '../promise';
// import {log} from '../supervisors';

export const extractBase64: AnyToAnyT = x => x.split(',').pop();

export const newFileReader: AnyToAnyT = () => new FileReader();

export const readAsDataURL: AnyToAny2T = factory => file =>
    parallel(K)([I, methodApply('readAsDataURL')(file)])(factory());

export const chargeFileReaderHandlers: AnyToAny2T = reader => ({
    resolve,
    reject,
}) => {
    reader.onload = pipe([climb(['target', 'result']), extractBase64, resolve]);
    reader.onerror = reject;
};

export const fileToBase64 = pipe([
    readAsDataURL(newFileReader),
    chargeFileReaderHandlers,
    newPromise,
]);
