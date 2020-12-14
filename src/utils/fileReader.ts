import type {AnyToAnyT, AnyToAny2T} from '../utils/types/functions';
import {parallel, K, I} from '../utils/combinators';
import {methodApply} from '../utils/object';

const fileReaderFactory: AnyToAnyT = () => new FileReader();

const readAsDataURL: AnyToAny2T = readerFactory => file =>
    parallel(K)([I, methodApply('readAsDataURL')(file)])(readerFactory());

export {fileReaderFactory, readAsDataURL};
