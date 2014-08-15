var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {

});

app.directive("panel", function() {
    return {
        restrict: "E",
        transclude: true,
        templateUrl:"tmplt.html"
    }
})