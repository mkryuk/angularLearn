/**
 * Created by maxim on 13.08.14.
 */

var twitterApp = angular.module("twitterApp",[]);

twitterApp.controller("twitterCtrl", function($scope){
    $scope.loadTweets = function(){
        alert("Loading tweets");
    };

    $scope.deleteTweets = function(){
        alert("Delete tweets");
    };
});

twitterApp.directive("enter",function(){
    return function(scope, element, attrs){
        element.bind('mouseenter', function(){
            scope.$apply(attrs.enter);
        });
    };
});
