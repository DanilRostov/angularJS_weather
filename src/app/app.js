'use strict';
import angular from 'angular';
import appComponent from './app.component';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
    .component('app', appComponent)
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode(true);
    }])


export default MODULE_NAME;