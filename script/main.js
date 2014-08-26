var app = angular.module("app", []);

app.controller("roomCtrl", function(){
    this.openDoor = function(){
        alert("creak");
    };
});