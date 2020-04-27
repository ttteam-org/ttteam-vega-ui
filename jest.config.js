module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-tests.ts'],
  moduleNameMapper: {
    '^.+\\.css$': 'identity-obj-proxy',
  },
  testMatch: ['**/*.test.{ts,tsx}'],
};
