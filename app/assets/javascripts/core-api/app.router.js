(function() {
  'use strict';

  angular
    .module('core-api')
    .config(RouterFunction);

  RouterFunction.$inject = ['$stateProvider', '$urlRouterProvider', 'core-api.APP_CONFIG'];

  function RouterFunction($stateProvider, $urlRouterProvider, APP_CONFIG) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: APP_CONFIG.main_page_html,
        // controller:,
        // controllerAs:,
      });

    $urlRouterProvider.otherwise('/');
  }
})();