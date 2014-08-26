var app = angular.module("app", []);

app.config(function($logProvider){
    //if we change it to false log will be disabled
    $logProvider.debugEnabled(true);
});

app.run(function($rootScope, $log){
    $rootScope.$log = $log;
});

app.controller("appCtrl", function($scope){
    $scope.myFunc = function(ev){

    }
});