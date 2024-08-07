const jestConfig = {
    "testEnvironment": "node",
    "verbose": true,
    "moduleFileExtensions": [
      "js",
      "ts",
      "tsx",
      "json",
      "node"
    ],
    "testPathIgnorePatterns": [
      "/node_modules/"
    ],
    "collectCoverage": true,
    "testMatch": [
        "**/*.test.js"
     ]
  }
  
  module.exports = jestConfig