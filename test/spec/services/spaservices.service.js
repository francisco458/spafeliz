'use strict';

describe('Service: spaServices.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaServices.service;
  beforeEach(inject(function (_spaServices.service_) {
    spaServices.service = _spaServices.service_;
  }));

  it('should do something', function () {
    expect(!!spaServices.service).toBe(true);
  });

});
