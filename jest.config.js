module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setup-tests.tsx'],
  preset: 'ts-jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/', '/types/'],
  testMatch: ['**/*.test.{ts,tsx}'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/*.stories.tsx'],
  transform: {
    '^.+\\.(js|ts)x?$': 'babel-jest',
  },
  transformIgnorePatterns: ['/node_modules/(?!@babel/runtime)'],
};
