var app = angular.module("app", ["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
        .when("/pizza/:crust/:toppings",{
        redirectTo:function(routeParams, path, search){
            console.log(routeParams);
            console.log(path);
            console.log(search);
            return '/'+routeParams.crust;
        }
    })
        .when("/deep", {
            template:"deep dish"
        })
        .otherwise({
            redirectTo: "/"
        })
});

app.controller("AppCtrl", function ($scope, $routeParams) {
    $scope.model = {
        message: "Address: "+
            $routeParams.country + ", " +
            $routeParams.state + ", " +
            $routeParams.city + "."
    }
});