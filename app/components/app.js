'use strict';

/**
 * @ngdoc overview
 * @name enquetesApp
 * @description
 * # enquetesApp
 *
 * Main module of the application.
 */
angular
  .module('enquetesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ngMaterial'
  ])
  .constant('REQUEST', {
    api: {
      url: 'http://polls.apiblueprint.org',
      questions: '/questions'
    }
  })
  .constant('PATH', {
    main: '/main',
    questions: '/questions'
  })
  .config(function($stateProvider, $urlRouterProvider, $translateProvider, PATH) {

    /* Configuração do provider de universalização e da linguagem padrão. */
    $translateProvider.useStaticFilesLoader({
      prefix: 'translate/messages-',
      suffix: '.json'
    });
    $translateProvider.preferredLanguage('en');

    /* Configuração dos estados e rotas da aplicação */
    $stateProvider.state('main', {
      abstract: true,
      url: PATH.main,
      templateUrl: 'views/main.html'
    }).state('main.questions', {
      url: PATH.questions,
      templateUrl: 'views/questions.html',
      controller: 'QuestionsCtrl as ctrl'
    });

    $urlRouterProvider.otherwise(function() {
      return '/main/questions';
    });

  });
