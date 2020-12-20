import type {AnyToAnyT} from '../types/functions';
const log: AnyToAnyT = x => (console.log(x), x);
export {log};
