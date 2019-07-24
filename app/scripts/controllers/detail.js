'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('DetailCtrl', detailCtrl);

detailCtrl.$inject = ['$state', 'spaServicesHttp'];

function detailCtrl($state, spaServicesHttp) {
  var vm = this;
  vm.$onInit = init;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;

  function init() {
    vm.loadSpaServicesHttp();
  }

  function loadSpaServicesHttp() {
    console.log('inicio');
    spaServicesHttp.getByPk($state.params.id)
      .then(function (result) {
        console.log('resultado ' + result.data)
        vm.serviceDetail = result.data;
      })
      .catch(function (err) {
        console.log(err);
      });
    console.log('termino');
  }

  spaServicesHttp
}
