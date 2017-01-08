'use strict';

(function() {

  /**
   * @ngdoc function
   * @type enquetesApp.controller:QuestionsCtrl
   * @description
   * # QuestionsCtrl
   * Controller of the enquetesApp
   */
  var QuestionsCtrl = function($scope, QuestionsFactory, $interval) {

    $scope.questions = [];
    $scope.question = { "question": '', "choices": ''};

    $scope.refreshQuestions = function(){
      QuestionsFactory.getQuestions().then(function(data){
        $scope.questions = data;
      });
    };

    $scope.addQuestion = function(){
      QuestionsFactory.postQuestions($scope.question).then(function(data){
        console.log(data);
      });
    };

    $scope.refreshQuestions();

    $interval(function(){
      $scope.refreshQuestions();
    }, 60000);

  };

  QuestionsCtrl.$inject = ['$scope', 'QuestionsFactory', '$interval'];

  angular
    .module('enquetesApp')
    .controller('QuestionsCtrl', QuestionsCtrl);
})();
