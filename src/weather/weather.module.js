'use strict';

import angular from 'angular';

const weatherModule = angular.module('weatherModule', [])
    .constant('weatherApi', {
        KEY: '9ae3b185aac8cd572506b1e04ef89802',
        HOST: ''
    });

export default weatherModule;