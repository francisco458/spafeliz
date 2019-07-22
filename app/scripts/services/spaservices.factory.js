'use strict';

/**
 * @ngdoc service
 * @name spafelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spafelizApp.
 */
angular.module('spafelizApp').factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices() {
 
  var dataServices = [
    { id:'1', name:'Masaje sencillo', cost:'60000', description:'30 min ', endHappy:false, image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'},
    { id:'2', name:'Masaje completo', cost:'90000', description:'60 min ', endHappy:false, image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'},
    { id:'3', name:'Masaje full', cost:'120000', description:'90 min ', endHappy:false, image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'},
    { id:'4', name:'Masaje chocoloterapia', cost:'150000', description:'100 min ', endHappy:false, image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'},
    { id:'5', name:'Masaje mascarilla', cost:'30000', description:'30 min ', endHappy:false, image:'https://pur.vamtam.com/wp-content/uploads/2017/12/pic6.jpg'}
  ];

  var services = {
    getAllServices:getAllServicesMethod,
    getServicesById:getServiceById
  }

  return services;

  function getAllServicesMethod(){
    return dataServices;
  }

  function getServiceById (id) {
    for(var i= 0 ; i < dataServices.length; i++){
      if (id == dataServices[i].id) {
        return dataServices[i];
      }
    }
    return null;
  }
  
};