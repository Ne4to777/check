import type {AnyToAnyT, AnyToAny2T, AnyToAny3T} from '../types/functions';

const I: AnyToAnyT = x => x;
const K: AnyToAny2T = x => () => x;
const A: AnyToAny2T = f => (...xs) => f(...xs);
const B: AnyToAny3T = f => g => (...xs) => f(g(...xs));
const C: AnyToAny3T = f => (...xs) => (...ys) => f(...ys)(...xs);

const pipeReducerAsync: AnyToAny2T = (acc, f) => async (...xs) =>
    f(await acc(...xs));
const pipeAsync: AnyToAnyT = fs => fs.reduce(pipeReducerAsync, I);

const pipeReducer: AnyToAny2T = (acc, f) => (...xs) => f(acc(...xs));
const pipe: AnyToAnyT = fs => fs.reduce(pipeReducer, I);

const pipeSafeReducerAsync: AnyToAny2T = (acc, [f, g]) => async (...xs) => {
    try {
        return await f(await acc(...xs));
    } catch (err) {
        if (g) throw await g(err);
        throw err;
    }
};
const pipeSafeAsync: AnyToAnyT = fs => {
    try {
        return fs.reduce(pipeSafeReducerAsync, I);
    } catch (err) {
        return err;
    }
};

const parallelRedcer: AnyToAny2T = (...xs) => (acc, f) => acc(f(...xs));

const parallel: AnyToAny3T = joiner => fs => (...xs) =>
    fs.reduce(parallelRedcer(...xs), joiner);

export {pipeAsync, pipe, pipeSafeAsync, parallel, I, K, B, C, A};
