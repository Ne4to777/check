import type {AnyToAnyT, AnyToAny2T, AnyToAny3T} from '../types/functions';

export const I: AnyToAnyT = x => x;
export const K: AnyToAny2T = x => () => x;
export const A: AnyToAny2T = f => (...xs) => f(...xs);
export const B: AnyToAny3T = f => g => (...xs) => f(g(...xs));
export const C: AnyToAny3T = f => (...xs) => (...ys) => f(...ys)(...xs);

export const pipeReducerAsync: AnyToAny2T = (acc, f) => async (...xs) =>
    f(await acc(...xs));
export const pipeAsync: AnyToAnyT = fs => fs.reduce(pipeReducerAsync, I);

const pipeReducer: AnyToAny2T = (acc, f) => (...xs) => f(acc(...xs));
export const pipe: AnyToAnyT = fs => fs.reduce(pipeReducer, I);

const bipipeReducerAsync: AnyToAny2T = (acc, [f, g]) => async (...xs) => {
    try {
        return await f(await acc(...xs));
    } catch (err) {
        if (g) throw await g(err);
        throw err;
    }
};
export const bipipeAsync: AnyToAnyT = fs => {
    try {
        return fs.reduce(bipipeReducerAsync, I);
    } catch (err) {
        return err;
    }
};

const parallelRedcer: AnyToAny2T = (...xs) => (acc, f) => acc(f(...xs));

export const parallel: AnyToAny3T = joiner => fs => (...xs) =>
    fs.reduce(parallelRedcer(...xs), joiner);

export const lazify: AnyToAny3T = f => (...xs) => () => f(...xs);
