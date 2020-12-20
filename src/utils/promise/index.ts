import type {AnyToAnyT} from '../types/functions';

const newPromise: AnyToAnyT = f =>
    new Promise((resolve, reject) => f({resolve, reject}));
export {newPromise};
