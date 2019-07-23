(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name spafelizApp.spaServices.service
   * @description
   * # spaServices.service
   * Service in the spafelizApp.
   */
  angular.module('spafelizApp').service('spaServicesHttp', spaServicesHttp);

  spaServicesHttp.$inject = ['$http', '$q'];

  function spaServicesHttp($http, $q) {

    let services = {
      getAll: getAll,
      getByPk: getByPk
    }
    return services;

    function getAll() {
      var defered = $q.defer();
      var promise = defered.promise;
      const url = 'http://localhost:3000/services';
      $http.get(url)
        .then(function (data) {
          console.log(data);
          defered.resolve(data)
        })
        .catch(function (error) {
          console.log(error);
          defered.reject(error);
        });
      return promise;
    }

    function getByPk(id) {

    }

  }
})();