import type {AnyToAnyT, AnyToAny2T} from '../utils/types/functions';
import {pipe} from '../utils/combinators';
import {climb} from '../utils/object';
import {newPromise} from '../utils/promise';
import {newFileReader, readAsDataURL} from '../utils/fileReader';
// import {log} from '../utils/supervisors';

const extractBase64: AnyToAnyT = x => x.split(',').pop();

const chargeFileReaderHandlers: AnyToAny2T = reader => ({resolve, reject}) => {
    reader.onload = pipe([climb(['target', 'result']), extractBase64, resolve]);
    reader.onerror = reject;
};

const fileToBase64 = pipe([
    readAsDataURL(newFileReader),
    chargeFileReaderHandlers,
    newPromise,
]);

export {fileToBase64};
