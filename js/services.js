var peopleData = angular.module('peopleData',[]);
peopleData.factory('peoples', function ($http) {

    var cachedData;
    var getData = function (callback) {
        if (cachedData) {
            callback(cachedData);
        }else {
            $http.get('data/data.json')
                .success(function (data) {
                    cachedData = data;
                    callback(cachedData);
                });
        }
    };

    var getCachedData = function (callback) {

        $http({
            method:'GET',
            url:'data/data.json',
            cache:true
        }).success(callback);
    };

    return {
        list: getCachedData,
        find: function (name, callback) {
            getCachedData(function(data){
                var person = data.filter(function(entry){
                    return entry.Number == name;
                })[0];
                callback(person);
            });
        }
    };
});