var app = angular.module("app", []);

app.directive("zippy",function(){
    return {
        restrict:"E",
        transclude:true,
        templateUrl:"tmplt.html",
        scope:{
            title:"@"
        },
        link:function(scope){
            scope.isHidden = true;
            scope.toggleContent = function(){
                scope.isHidden = !scope.isHidden;
            };
        }
    };
});