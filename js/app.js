
var app = angular.module("app",['ngRoute','peopleData','filtersModule']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl:'view/list.html',
            controller:'NameCtrl'
        })
        .when('/:Number',{
            templateUrl:'view/id.html',
            controller:'idCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
});

app.NameCtrl = app.controller('NameCtrl',['$scope','$http', 'peoples',function( $scope, $http, peoples){
    $scope.sortedField = 'Number';
    $scope.reverse = false;

    peoples.list(function (data) {
        $scope.dataList = data;
    });

    $scope.applyFilter = function () {
        $scope.findFilter = $scope.find;
        $scope.find = "";
    }
}]);

app.idCtrl = app.controller('idCtrl', ['$scope','$http', '$routeParams', 'peoples', function ($scope, $http, $routeParams, peoples) {
    $scope.person = {};
    peoples.find($routeParams.Number, function (person) {
        $scope.person = person;
    });
}]);