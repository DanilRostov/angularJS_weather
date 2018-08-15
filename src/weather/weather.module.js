'use strict';

import angular from 'angular';

const weatherModule = angular.module('weatherModule', [])
    .constant('weatherApi', {
        KEY: '9ae3b185aac8cd572506b1e04ef89802',
        HOST: 'http://api.openweathermap.org/data/2.5/weather'
    })
    .service("weatherApiService", ['$http', "weatherApi", function($http, weatherApi) {
        this.getWeatherByCityName = function (city) {
            return $http.get(`${weatherApi.HOST}?q=${city}&appid=${weatherApi.KEY}`);
        }
    }]);

export default weatherModule;