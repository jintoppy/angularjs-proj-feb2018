var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', ['$scope', 'AppService', 
function($scope, AppService){
    
    AppService.getStudents()
        .then(function(result){
            $scope.students = result.data.map(function(item){
                item.seniority = item.age > 10 ? "senior": "junior";
                return item;
            });
        });

    $scope.onViewBtnClick = function(student){
        $scope.selectedStudent = student;
    };

    $scope.onBtnClick = function(event){
        console.log(event.target);
    };


}]);
