import type {AnyToAnyT} from '../../types/functions';
import {stringify} from '..';
import {testToBe} from '../../test';
import {OBJECT_DUMMY} from '../../dummies';

const stringifyJSON: AnyToAnyT = sample => JSON.stringify(sample, null, '\t');

describe('JSON', () => {
    testToBe('stringify')(OBJECT_DUMMY)(stringifyJSON)(stringify);
});
