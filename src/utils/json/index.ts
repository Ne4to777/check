import type {AnyToAnyT} from '../types/functions';
export const stringify: AnyToAnyT = x => JSON.stringify(x, null, '\t');
