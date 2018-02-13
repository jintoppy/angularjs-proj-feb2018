var myapp = angular.module('myapp', []);

myapp.controller('MyCtrl', ['$scope', 'AppService', 
function($scope, AppService){
    $scope.name = 'Myname';
    $scope.mydate = '1518515719648';
    
    AppService.getStudents()
        .then(function(result){
            $scope.students = result;
        });    

    $scope.onViewBtnClick = function(student){
        $scope.selectedStudent = student;
    };

    $scope.onBtnClick = function(event){
        console.log(event.target);
        AppService.getData().then(function(res) {
            alert("data1 is " + res);
        });
        
    };

    $scope.onAnotherBtnClick = function(){
        AppService.getData().then(function(res){
            alert("data2 is " + res);
        }, function(){
            console.log('err');
        });
        
    };


}]);
