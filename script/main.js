var app = angular.module("app", []);

app.run(function($templateCache){
    $templateCache.put("zippy.html","<div class='panel'' ng-click='toggleContent()'>{{title}}<div ng-transclude ng-hide='isHidden'></div></div>");
});

app.directive("zippy",function(){
    return {
        restrict:"E",
        transclude:true,
        templateUrl:"zippy.html",
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