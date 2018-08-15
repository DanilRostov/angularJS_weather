import AppController from './app.controller';

import '../style/app.css';

'use strict';

const appComponent = {
    template: require('./app.html'),
    restrict: 'E',
    controller: AppController,
    controllerAs: 'app'
};

export default appComponent;