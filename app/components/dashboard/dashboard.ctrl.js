'use strict';

(function() {

  /**
   * @ngdoc function
   * @type challengeApp.controller:DashboardCtrl
   * @description
   * # DashboardCtrl
   * Controller of the challengeApp
   */
  var DashboardCtrl = function($scope) {

    // Mock-up info data
    $scope.datalist = [{
      name: "Tenrox-R1_1235",
      type: "build",
      imgtype: "pc-gray.png",
      class: "content--gray",
      owner: "",
      time: "",
      state: "Pending",
      metrics: 0,
      colormetrics: "",
      classtest: "metrics__span--up",
      classmain: "metrics__span--up",
      imgtest: "arrow-green.png",
      imgmain: "arrow-green.png",
      classimgtest: "metrics__img--up",
      classimgmain: "metrics__img--up",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false,
      msg: "",
      act: ""
    },{
      name: "432462",
      type: "firewall",
      imgtype: "wall-blue.png",
      class: "content--blue",
      owner: "jtuck",
      time: "4/18/2014 12:12pm",
      state: "Running",
      metrics: 70,
      colormetrics: "blue",
      classtest: "metrics__span--up",
      classmain: "metrics__span--up",
      imgtest: "arrow-green.png",
      imgmain: "arrow-green.png",
      classimgtest: "metrics__img--up",
      classimgmain: "metrics__img--up",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false,
      msg: "",
      act: ""
    },{
      name: "432461",
      type: "firewall",
      imgtype: "wall-red.png",
      class: "content--red",
      owner: "samy",
      time: "4/18/2014 10:53am",
      state: "Rejected",
      metrics: 100,
      colormetrics: "red",
      classtest: "metrics__span--up",
      classmain: "metrics__span--down",
      imgtest: "arrow-green.png",
      imgmain: "arrow-red.png",
      classimgtest: "metrics__img--up",
      classimgmain: "metrics__img--down",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false,
      msg: "Metrics Reduction",
      act: "Find Issues"
    },{
      name: "Tenrox-R1_1234",
      type: "build",
      imgtype: "pc-green.png",
      class: "content--green",
      owner: "",
      time: "4/17/2014 9:42am",
      state: "Complete",
      metrics: 100,
      colormetrics: "green",
      classtest: "metrics__span--up",
      classmain: "metrics__span--up",
      imgtest: "arrow-green.png",
      imgmain: "arrow-green.png",
      classimgtest: "metrics__img--up",
      classimgmain: "metrics__img--up",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false,
      msg: "Complete",
      act: "Deploy"
    },{
      name: "432460",
      type: "firewall",
      imgtype: "wall-red.png",
      class: "content--red",
      owner: "samy",
      time: "4/17/2014 7:51am",
      state: "Rejected",
      metrics: 100,
      colormetrics: "red",
      classtest: "metrics__span--down",
      classmain: "metrics__span--up",
      imgtest: "arrow-red.png",
      imgmain: "arrow-green.png",
      classimgtest: "metrics__img--down",
      classimgmain: "metrics__img--up",
      build: 0,
      colorbuild: "",
      unit: 0,
      colorunit: "",
      functional: 0,
      colorfunc: "",
      full: false,
      msg: "Failure Tests",
      act: "Find Issues"
    },{
      name: "432459",
      type: "firewall",
      imgtype: "wall-green.png",
      class: "content--green",
      owner: "samy",
      time: "4/16/2014 6:43am",
      state: "Accepted",
      metrics: 100,
      colormetrics: "green",
      classtest: "metrics__span--up",
      classmain: "metrics__span--up",
      imgtest: "arrow-green.png",
      imgmain: "arrow-green.png",
      classimgtest: "metrics__img--up",
      classimgmain: "metrics__img--up",
      build: 100,
      colorbuild: "green",
      unit: 100,
      colorunit: "green",
      functional: 100,
      colorfunc: "green",
      full: false,
      msg: "Auto-Merge",
      act: "Merged Build"
    }];

    $scope.resetFulls =  function(){
      angular.forEach($scope.datalist, function(value){
        value.full = false;
      });
    };

    $scope.openFull = function(data){
      if(!data.full){
        $scope.resetFulls();
        data.full = true;
      }else{
        data.full = false;
      }
    };

  };

  DashboardCtrl.$inject = ['$scope'];

  angular
    .module('challengeApp')
    .controller('DashboardCtrl', DashboardCtrl);
})();
