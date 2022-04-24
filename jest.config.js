const config = {
  bail: 1,
  verbose: true,
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 80,
    },
  },
};

module.exports = config;
