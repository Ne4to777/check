import type {AnyToAnyT} from '../types/functions';
export const log: AnyToAnyT = x => (console.log(x), x);
