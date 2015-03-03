

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
                     

                        $scope.alerts.push({type: 'success',msg: 'Email was sent'});
                        
                        $scope.formData = {
                               name:'Your Name',
                               subject:'Subject',
                               email:'Your email',
                               message:'What is in your mind?'
                        };
                        
                    }).error(function (data,status,header,config){
                        
                        console.log(data);
                           $scope.alerts.push({type: 'danger',msg: 'There was an error'});
                      
                        
                    });



        }

        $scope.addAlert = function () {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };


    }


    app.controller('ContactController', ContactController);
})();
