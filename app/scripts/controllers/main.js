'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices'];

function mainCtrl(spaServices) {

  var vm = this;
  vm.$onInit = init;
  vm.miNombre = 'Francisco';
  vm.loadSpaServices = loadSpaServices;

  function init(){
    vm.loadSpaServices();
  }

  function loadSpaServices(){
    vm.serviceList = spaServices.getAllServices();
    console.log(vm.serviceList);
  }

};
