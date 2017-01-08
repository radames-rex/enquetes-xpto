'use strict';

describe('Controller: DashboardCtrl', function () {

  beforeEach(module('challengeApp'));

  var DashboardCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardCtrl = $controller('DashboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a mock of builds and firewalls to the scope', function () {
    expect(scope.datalist.length).toBe(6);
  });

  it('should reset all opened from data of datalist (reset elements)', function () {
    scope.resetFulls();
    expect(scope.datalist[5].full).toBe(false);
  });

  it('should change opened from data specific (open and close elements)', function () {
    scope.openFull(scope.datalist[5]);
    expect(scope.datalist[5].full).toBe(true);
  });
});
