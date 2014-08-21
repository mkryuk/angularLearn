var app = angular.module("app", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            templateUrl: 'app.html',
            controller: "AppCtrl"
        })
        .when('/someText',
        {
            template:"some text "
        })
        .otherwise({
            template:"404 NOT FOUND"
        })
});

app.controller("AppCtrl", function ($scope) {
    $scope.model = {
        message: "This is my app!!!"
    }
});