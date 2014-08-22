var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider.when("/", {
        templateUrl:"app.html",
        controller:"ViewCtrl",
        resolve:{
            loadData:viewCtrl.loadData
        }
    })
});

var viewCtrl = app.controller("ViewCtrl", function($scope, $route){
    //console.log($route);
    $scope.model = {message: "I'm a great app!"}
});

viewCtrl.loadData = function($q, $timeout){
    var defer = $q.defer();
    $timeout(function(){
        //changing this to defer.resolve("Your network is down"); it'l be no error
        defer.reject("Your network is down");
    }, 500);
    return defer.promise;
};

app.directive("error", function($rootScope){
   return {
       restrict:"E",
       template:"<div class='alert-danger' ng-show='isError'>Error!!!</div>",
       link:function(scope){
           $rootScope.$on("$routeChangeError", function(event, current, previous, rejection){
               scope.isError = true;
           });
       }
   }
});