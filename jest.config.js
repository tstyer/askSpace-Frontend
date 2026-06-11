module.exports = {
preset: "jest-expo",
testEnvironment: 'node',
testMatch: ['**/?(*.)+(spec|test).ts?(x)'],
setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
};