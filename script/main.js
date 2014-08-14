var myApp = angular.module("myApp",[]);


myApp.controller("appCtrl",function($scope){
    $scope.ctrlrFlavor = "blackberry";
});

myApp.directive("drink",function(){
    return {
        scope:{
            flavor:"@"
        },
        templateUrl:"tmplt.html"
    };
});