"use strict";

angular.module("wideWorldTravel").controller("GuideCtrl", function($scope, GuideFactory) {
   GuideFactory.getGuides()
   .then( (guides) => {
       console.log("Guides data", guides.data.guides);
       $scope.guides = guides.data.guides;
   });
});