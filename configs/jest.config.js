module.exports = {
    roots: ['<rootDir>/../src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    cache: false,
    testMatch: ['<rootDir>/../src/__tests__/*.test.ts*'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json']
};