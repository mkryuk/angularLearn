var filtersModule = angular.module('filtersModule',[] );

filtersModule.filter('encodeUri', function () {
    return window.encodeURI;
});