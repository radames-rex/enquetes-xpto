'use strict';

(function() {

  /**
   * @ngdoc function
   * @name enquetesApp.factory:QuestionsFactory
   * @description
   * # QuestionsFactory
   * Factory of the enquetesApp
   */
  var QuestionsFactory = function(REQUEST, RequestFactory, $q) {
    var QuestionsFactory = {};

    QuestionsFactory.getQuestions = function() {
      var defer = $q.defer();
      RequestFactory.get(REQUEST.api.url + REQUEST.api.questions).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    QuestionsFactory.postQuestions = function(data) {
      var defer = $q.defer();
      RequestFactory.postFull(REQUEST.api.url + REQUEST.api.questions, data).then(function(data) {
        data = data.data;
        if (typeof data === 'object') {
          defer.resolve(data);
        } else {
          defer.reject("hasnt object");
        }
      }, function(response, status) {
        defer.reject(response, status);
      });
      return defer.promise;
    };

    return QuestionsFactory;
  };

  QuestionsFactory.$inject = ['REQUEST', 'RequestFactory', '$q'];

  angular
    .module('enquetesApp')
    .factory('QuestionsFactory', QuestionsFactory);
})();
