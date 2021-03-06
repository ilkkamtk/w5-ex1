angular.module('myApp')
    .controller('LoginController', function ($scope, AjaxFactory, MediaService) {

        $scope.login = function () {
            
            var data = {
                username: $scope.uname,
                password: $scope.pwd
            };

            var request = AjaxFactory.login(data);

            request.then(function (response) {
                MediaService.setVariable('userData', response.data);
                $scope.logged = true;
            }, function (error) {
                console.log(error.data);
            });
        };
    });