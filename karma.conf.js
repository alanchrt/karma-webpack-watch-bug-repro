'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    reporters: ['dots'],
    colors: true,
    port: 9876,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,

    files: [
      'the-test.spec.js'
    ],

    preprocessors: {
      'the-test.spec.js': [],
    },

    plugins: [
      require('karma-chrome-launcher'),
      require('karma-webpack'),
      require('karma-jasmine')
    ],

    webpack: {},
    webpackServer: {
      noInfo: true  // keep the console clean
    }
  });
};
