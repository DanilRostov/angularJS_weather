'use strict';
import angular from 'angular';
import appComponent from './app.component';
import { AppProvider } from './app.provider';
import weatherModule from '../weather/weather.module';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [weatherModule.name])
    .component('app', appComponent)
    .constant('userName', 'Sergey')
    .provider('appService', AppProvider)
    .factory('appFactory', function() {
        const data = [];
        return {
            sayHi: () => console.log(`I am a factory`)
        };
    })
    .config(['appServiceProvider',(appServiceProvider) => appServiceProvider.setName('Yuri')])
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])


export default MODULE_NAME;