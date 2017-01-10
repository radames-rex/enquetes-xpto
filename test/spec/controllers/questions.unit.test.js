'use strict';

describe('Controller: QuestionsCtrl', function () {

  beforeEach(module('enquetesApp'));

  var QuestionsCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuestionsCtrl = $controller('QuestionsCtrl', {
      $scope: scope
    });
  }));

  it('deve inicializar o $scope do controller.', function () {
    expect(scope.questions.length).toBe(0);
    expect(scope.count.length).toBe(0);
  });

  it('deve adicionar entradas para novas opções.', function () {
    scope.addChoices();
    scope.addChoices();
    expect(scope.count.length).toBe(2);
  });

});
