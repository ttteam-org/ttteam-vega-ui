module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/types/'],
  testMatch: ['**/*.test.{ts,tsx}'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.stories.tsx'],
};
