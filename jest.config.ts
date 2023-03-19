export default {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The root directory that Jest should scan for tests and modules within
  rootDir: './',

  // Run tests from one or more projects
  projects: [{
    preset: '@shelf/jest-mongodb',
    testEnvironment: 'node',
    displayName: 'server',
    testMatch: ['<rootDir>/apps/server/**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    }
  }, {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    displayName: 'client',
    testMatch: ['<rootDir>/apps/client/**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    }
  }],

  // The test environment that will be used for testing
  testEnvironment: "node",

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: [
    "/node_modules/",
    "dist",
    "public"
  ],

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};
