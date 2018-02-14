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

myapp.component('homePage', {
    template: '<div>This is the home page</div>'
});

myapp.component('aboutPage', {
    template: '<div>This is the about page</div>'
});

