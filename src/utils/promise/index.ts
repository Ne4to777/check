import type {AnyToAnyT} from '../types/functions';

export const newPromise: AnyToAnyT = f =>
    new Promise((resolve, reject) => f({resolve, reject}));
