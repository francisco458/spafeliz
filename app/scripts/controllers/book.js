'use strict';

/**
 * @ngdoc function
 * @name spafelizApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the spafelizApp
 */
angular.module('spafelizApp').controller('BookCtrl', bookCtrl);

bookCtrl.$inject = ['spaServicesHttp'];

function bookCtrl(spaServicesHttp) {
  var vm = this;
  vm.form = {};
  vm.submitBook = submitBook;
  vm.loadSpaServicesHttp = loadSpaServicesHttp;
  vm.$onInit = init;

  function init() {
    console.log('init book controller');
    vm.loadSpaServicesHttp();
  }

  function submitBook(){
    console.log('formulario: ', vm.form );
  }

  function loadSpaServicesHttp() {
    spaServicesHttp.getAll()
      .then(function (result) {
        vm.serviceList = result.data;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

}