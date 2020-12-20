import type {AnyToAnyT, AnyToAny2T, AnyToAny3T} from '../types/functions';

const climbReducer: AnyToAnyT = (acc, x) => acc[x];
const climb: AnyToAny2T = props => o => props.reduce(climbReducer, o);

const methodApply: AnyToAny3T = m => arg => o => o[m](arg);
const methodEmptyApply: AnyToAny2T = m => o => o[m]();
export {climb, methodApply, methodEmptyApply};
