(function() {
  'use strict';

  angular
    .module('core-api.cities')
    .directive('caCities', CitiesDirective);

  CitiesDirective.$inject = ['core-api.APP_CONFIG'];

  function CitiesDirective(APP_CONFIG) {
    var directive = {
      templateUrl: APP_CONFIG.cities_html,
      replace: true,
      bindToController: true,
      controller: 'core-api.cities.CitiesController',
      controllerAs: 'citiesVM',
      link: link,
      restrict: 'E',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      console.log('CitiesDirective', scope);
    }
  }
})();