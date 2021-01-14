import type {AnyToAny4T, AnyToAny2T, AnyToAny3T} from '../types/functions';

const expectToBe: AnyToAny2T = controlData => async testData =>
    expect(await testData).toBe(await controlData);

export const toBe: AnyToAny3T = sample => controlHandler => testHandler =>
    expectToBe(controlHandler(sample))(testHandler(sample));

export const testToBe: AnyToAny4T = name => sample => controlHandler => testHandler =>
    test(name, () => toBe(sample)(controlHandler)(testHandler));
