'use strict'
module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/javascript/vendor/chai.js',
      'app/javascript/vendor/jquery.min.js',
      'app/javascript/vendor/toastr.js',
      'app/javascript/vendor/Chart.js',
      'app/javascript/vendor/fastclick.js',
      'app/javascript/vendor/angular-chart.js',
      'app/app.js',
      'app/javascript/service/*.js',
      'app/javascript/market/*.js',
      'app/javascript/upgrades/*.js',
      'app/javascript/achievements/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],
    reporters : ['progress', 'coverage'],

    coverageReporter: {
        type: 'lcov',
        dir: 'coverage',
        subdir: '.',
        file: 'lcov.info'
    },

    preprocessors : {
      '**/app.js': 'coverage',
      '**/app/javascript/!(*vendor)/!(*test).js': 'coverage'
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
