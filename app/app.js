"use strict";

angular.module("wideWorldTravel", ["ngRoute"])
.config($routeProvider => {
    $routeProvider
    .when("/", {
        templateUrl: "partials/guide-list.html",
        controller: "GuideCtrl"
    })
    .otherwise("/");
});