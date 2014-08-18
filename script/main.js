var app = angular.module("myApp",[]);

app.directive("dumbPassword",function(){
    var validElement = angular.element("<div>{{model.input}}</div>");
    this.link = function(scope, element){
        scope.$watch("model.input",function(value)
        {
            if(value === 'password')
                validElement.toggleClass('alert-warning');
            else
                if(validElement.hasClass('alert-warning'))
                    validElement.removeClass('alert-warning');
        })
    };

    return {
        restrict:'E',
        replace:true,
        templateUrl:"tmplt.html",
        compile:function(telem){
            telem.append(validElement);
            return link;
        }

    };
});