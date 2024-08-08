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
    "collectCoverage": false,
    "testMatch": [
        "**/*.test.js"
     ]
  }
  
  module.exports = jestConfig