module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper:{
        '\\.(gif|ttf|eot|svg|png|jpeg|jpg)$': '<rootDir>/.jest/mocks/fileMock.js',
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    }
}