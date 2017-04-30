angular.module('app').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })

        .when('/users/list', {
            templateUrl: 'views/userlist.html',
            controller: 'UserListCtrl'
        })
        .when('/users/add', {
            templateUrl: 'views/useradd.html',
            controller: 'UserAddCtrl'
        })
        .when('/users/view/:id', {
            templateUrl: 'views/userview.html',
            controller: 'UserViewCtrl'
        })
        .when('/users/edit/:id', {
            templateUrl: 'views/useredit.html',
            controller: 'UserEditCtrl'
        })

		
        .when('/emps/list', {
            templateUrl: 'views/emplist.html',
            controller: 'EmpListCtrl'
        })
        .when('/emps/add', {
            templateUrl: 'views/empadd.html',
            controller: 'EmpAddCtrl'
        })
        .when('/emps/view/:id', {
            templateUrl: 'views/empview.html',
            controller: 'EmpViewCtrl'
        })
        .when('/emps/edit/:id', {
            templateUrl: 'views/empedit.html',
            controller: 'EmpEditCtrl'
        })

        .when('/clients/list', {
            templateUrl: 'views/clientlist.html',
            controller: 'ClientListCtrl'
        })
        .when('/clients/add', {
            templateUrl: 'views/clientadd.html',
            controller: 'ClientAddCtrl'
        })
        .when('/clients/view/:id', {
            templateUrl: 'views/clientview.html',
            controller: 'ClientViewCtrl'
        })
        .when('/clients/edit/:id', {
            templateUrl: 'views/clientedit.html',
            controller: 'ClientEditCtrl'
        })

        .when('/weeklyroster', {
            templateUrl: 'views/weeklyroster.html',
            controller: 'WeeklyRosterCtrl'
        })
        .when('/dailyroster', {
            templateUrl: 'views/dailyroster.html',
            controller: 'DailyRosterCtrl'
        })

});