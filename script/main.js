var myApp = angular.module("myApp",[]);

myApp.controller("appCtrl",function($scope){
    $scope.callHome = function(message){
        alert(message);
    };
});

myApp.directive("phone",function(){
    return {
        scope:{
            dial:"&"
        },
        templateUrl:"tmplt.html"
    };
});