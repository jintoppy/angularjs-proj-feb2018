var myapp = angular.module('myapp');

myapp.service('AppService', ['$http', '$q',
function($http, $q){
    this.getStudents = function(){
        var defer = $q.defer();
        var httpPromise = $http.get('/students.json');
        httpPromise.then(function(result){
                var students = result.data.map(function(item){
                    item.seniority = item.age > 10 ? "senior": "junior";
                    return item;
                });
                defer.resolve(students);
        });
        return defer.promise;
    };

    this.getData = function(){
        var defer = $q.defer();
        defer.resolve('hello');
        return defer.promise;
    };

}]);