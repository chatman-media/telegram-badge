module.exports = {
  preset: 'ts-jest/presets/default',
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/*.(test|spec).+(ts|tsx)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^badge-maker$': '<rootDir>/tests/__mocks__/badge-maker.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['api/**/*.{ts}', '!api/**/*.d.ts'],
};
