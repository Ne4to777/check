import type {AnyToAny4T, AnyToAny3T} from '../types/functions';

const expectToBe: AnyToAny3T = controlData => testData => async () =>
    expect(await testData).toBe(await controlData);

const testToBe: AnyToAny4T = name => sample => controlHandler => testHandler =>
    test(name, expectToBe(controlHandler(sample))(testHandler(sample)));

export {testToBe};
