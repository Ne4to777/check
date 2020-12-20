import {fileToBase64} from '..';
import {testToBe} from '../../test';

const file = new File(['foo'], 'foo.txt', {
    type: 'text/plain',
});
const toBase64 = () => 'Zm9v';

describe('File', () => {
    testToBe('fileToBase64')(file)(toBase64)(fileToBase64);
});
