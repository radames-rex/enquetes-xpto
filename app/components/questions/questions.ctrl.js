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
    // $scope.question = { "question": '', "choices": ''};
    $scope.count = [];
    var numberCount = 0;

    $scope.refreshQuestions = function(){
      QuestionsFactory.getQuestions().then(function(data){
        $scope.questions = data;
      });
    };

    $scope.addQuestion = function(){
      var choices = [];
      angular.forEach($scope.question.choices, function(value){
        choices.push(value);
      });
      var body = {
        "question" : $scope.question.question,
        "choices" : choices
      };
      QuestionsFactory.postQuestions(body).then(function(data){
        console.log(data);
      });
    };

    $scope.addChoices = function(){
      $scope.count.push(++numberCount);
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
