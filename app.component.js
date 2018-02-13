var myapp = angular.module('myapp');

myapp.component('studentDetails', {
    templateUrl: 'student-details.tpl.html',
    bindings: {
        myTitle: '@',
        currentStudent: '<'
    },
    controller: [function(){
        this.myname = 'custom component';
    }]
});