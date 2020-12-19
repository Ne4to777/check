import type {AnyToAnyT, AnyToAny2T, AnyToAny3T} from '../types/functions';

const I: AnyToAnyT = x => x;
const K: AnyToAny2T = x => () => x;
const B: AnyToAny3T = f => g => x => f(g(x));
const C: AnyToAny3T = f => x => y => f(y)(x);

type PipeReducerT = (x: any, y: any) => AnyToAnyT;
const pipeReducerAsync: PipeReducerT = (acc, f) => async x => f(await acc(x));
const pipeAsync: AnyToAnyT = fs => fs.reduce(pipeReducerAsync, I);

const pipeReducer: PipeReducerT = (acc, f) => x => f(acc(x));
const pipe: AnyToAnyT = fs => fs.reduce(pipeReducer, I);

const pipeSafeReducerAsync: PipeReducerT = (acc, [f, g]) => async x => {
    try {
        return await f(await acc(x));
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

const parallelRedcer: AnyToAny2T = x => (acc, f) => acc(f(x));

const parallel: AnyToAny3T = joiner => fs => x =>
    fs.reduce(parallelRedcer(x), joiner);

export {pipeAsync, pipe, pipeSafeAsync, parallel, I, K, B, C};
