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

  spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

  function spaServicesHttp($http, $q, httpConfig) {

    let services = {
      getAll: getAll,
      getByPk: getByPk
    }
    return services;

    function getAll() {
      var defered = $q.defer();
      var promise = defered.promise;
      // const url = 'http://localhost:3000/services';
      const url = httpConfig.url + httpConfig.services.all;
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
      var defered = $q.defer();
      var promise = defered.promise;
      const url = httpConfig.url + httpConfig.services.all + '/' + id;
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

  }
})();