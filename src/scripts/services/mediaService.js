angular.module('myApp')
    .service('MediaService', function ($rootScope) {
        var mediaVariables = {
            mediaUrl: 'http://util.mw.metropolia.fi/uploads/',
            userData: {}
        };

        mediaVariables.setVariable = function (key, value) {
            mediaVariables[key] = value;
        };

        mediaVariables.handleError = function (error) {
            console.log(error.data);
        };

        return mediaVariables;
    });