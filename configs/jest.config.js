module.exports = {
    roots: ['<rootDir>/../src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    // cache: false,
    testMatch: ['**/__tests__/**'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};