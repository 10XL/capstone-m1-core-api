(function() {
  'use strict';

  angular
    .module('core-api.cities')
    .controller('core-api.cities.CitiesController', CitiesController);

  CitiesController.$inject = ['core-api.cities.City'];

  function CitiesController(City) {
    var vm = this;
    vm.cities;
    vm.city;
    vm.edit = edit;
    vm.create = create;
    vm.update = update;
    vm.remove = remove;

    activate();
    return;
    ////////////////
    function activate() {
      newCity();
      vm.cities = City.query();
    }

    function newCity() {
      vm.city = new City();
    }

    function handleError(res) {
      console.log(res);
    }

    function edit(object) {
      console.log("selected", object);
      vm.city = object;
    }

    function create() {
      //console.log("creating city", vm.city);
      vm.city.$save()
        .then(function(res) {
          console.log(res);
          vm.cities.push(vm.city);
          newCity();
        }).catch(handleError);
    }

    function update() {
      vm.city.$update()
        .then(function(res){
          // console.log(res);
        })
        .catch(handleError);
    }

    function remove() {
      // console.log("remove", vm.city);
      vm.city.$delete()
        .then(function(res){
          // console.log(res);
          // remove the element from local array
          removeElement(vm.cities, vm.city);
          // vm.cities = City.query();
          // replace edit area with prototype instance
          newCity(); 
        })
        .catch(handleError);
    }

    function removeElement(elements, element) {
      for (var i=0; i < elements.length; i++)
        if (elements[i].id === element.id){
          elements.splice(i, 1);
          break;
        }
    }

  }
})();