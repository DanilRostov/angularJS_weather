import angular from "angular";
import ngRoute from "angular-route";

const routeModule = angular.module('router', [ngRoute])
    .config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            template: `<app></app>`
        })
    }]);

export default routeModule;