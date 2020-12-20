import type {AnyToAny3T} from './../types/functions';

const createReducer: AnyToAny3T = cases => init => (
    state = init,
    {type, payload},
) => {
    const actionCase = cases[type];
    const result = actionCase ? actionCase({state, payload}) : {};
    return {...state, ...result};
};

export {createReducer};
