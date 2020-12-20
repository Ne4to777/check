import type {AnyToAnyT, AnyToAny2T} from '../../types/functions';
import {pipeAsync, pipe, pipeSafeAsync, parallel, I, K, B, C} from '..';
import {testToBe} from '../../test';
import {OBJECT_DUMMY} from '../../dummies';

const returnIdentity: AnyToAnyT = x => x;
const test: AnyToAny2T = name => testToBe(name)(OBJECT_DUMMY)(returnIdentity);

const returnConstant: AnyToAnyT = x => K(x)();
const returnCompose: AnyToAnyT = B(I)(I);
const returnFlip: AnyToAnyT = x => C(K)(x)(x);
const returnPipe: AnyToAnyT = pipe([I, I]);
const returnPipeAsync: AnyToAnyT = pipeAsync([I, I]);
const returnPipeSafeAsync: AnyToAnyT = pipeSafeAsync([[I], [I]]);
const returnParallel: AnyToAnyT = parallel(K)([I, I]);

describe('Combinators', () => {
    test('I')(I);
    test('K')(returnConstant);
    test('B')(returnCompose);
    test('C')(returnFlip);
    test('pipe')(returnPipe);
    test('pipeAsync')(returnPipeAsync);
    test('pipeSafeAsync')(returnPipeSafeAsync);
    test('parallel')(returnParallel);
});
