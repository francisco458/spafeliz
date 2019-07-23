'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('MainCtrl', mainCtrl);

mainCtrl.$inject = ['spaServices', 'spaServicesHttp'];

function mainCtrl(spaServices, spaServicesHttp) {

  var vm = this;
  vm.$onInit = init;
  vm.miNombre = 'Francisco';
  vm.loadSpaServices = loadSpaServices;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function init() {
    //vm.loadSpaServices();
    vm.loadSpaServicesHttp();
  }

  function loadSpaServices() {
    vm.serviceList = spaServices.getAllServices();
    console.log(vm.serviceList);
  }

  function loadSpaServicesHttp() {
    console.log('inicio');
    spaServicesHttp.getAll()
      .then(function (result) {
        console.log('resultado ' + result.data)
        vm.serviceList = result.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log('termino');
  }

};
