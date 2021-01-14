import type {AnyToAnyT, AnyToAny2T, AnyToAny3T} from '../types/functions';

const climbReducer: AnyToAnyT = (acc, x) => acc[x];
export const climb: AnyToAny2T = props => o => props.reduce(climbReducer, o);

export const methodApply: AnyToAny3T = m => (...arg) => o => o[m](...arg);
export const methodEmptyApply: AnyToAny2T = m => o => o[m]();

export const mapObject: AnyToAny2T = f => o => {
    const result: Record<string, any> = {};
    for (const key in o) {
        result[key] = f(o[key]);
    }
    return result;
};
