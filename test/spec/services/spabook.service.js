'use strict';

describe('Service: spaBook.service', function () {

  // load the service's module
  beforeEach(module('spafelizApp'));

  // instantiate service
  var spaBook.service;
  beforeEach(inject(function (_spaBook.service_) {
    spaBook.service = _spaBook.service_;
  }));

  it('should do something', function () {
    expect(!!spaBook.service).toBe(true);
  });

});
