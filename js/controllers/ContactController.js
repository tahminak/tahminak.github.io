

(function () {

    'use strict';

    var app = angular.module("myResumeApp");



    var ContactController = function ($scope, $http) {

        console.log("In Contact controller");

        // create a blank object to hold our form information
        // $scope will allow this to pass between controller and view
        $scope.formData = {};
        $scope.alerts = [];

        $scope.sendEmail = function () {

            console.log("Clicked the submit button");

            $http({
                method: 'POST',
                url: '/php/mail.php',
                data: $.param($scope.formData), // pass in data as strings
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
            })
                    .success(function (data) {
                        console.log(data);
                        alert("Email was sent");
                        
                        $scope.alerts.push({msg: 'Email was sent'});
                    });



        }

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };


    }


    app.controller('ContactController', ContactController);
})();
