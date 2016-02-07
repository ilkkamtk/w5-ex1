angular.module('myApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/loginForm.html',
                controller: 'LoginController'
            })
            .when('/myFiles', {
                templateUrl: 'views/showFiles.html',
                controller: 'UserFilesController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });