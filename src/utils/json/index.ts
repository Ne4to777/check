import type {AnyToAnyT} from '../types/functions';
const stringify: AnyToAnyT = x => JSON.stringify(x, null, '\t');
export {stringify};
