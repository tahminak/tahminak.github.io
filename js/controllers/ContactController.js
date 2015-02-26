

(function (){
    
'use strict';

var app= angular.module("myResumeApp");
    
    
    
var ContactController=function ($scope,$http){
    
    console.log("In Contact controller");
    
      // create a blank object to hold our form information
      // $scope will allow this to pass between controller and view
      $scope.formData = {};

    
    $scope.sendEmail=function (){
        
        console.log("Clicked the submit button");
        
        $http({
  method  : 'POST',
  url     : '/php/mail.php',
  data    : $.param($scope.formData),  // pass in data as strings
  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
 })
  .success(function(data) {
    console.log(data);
//
//    if (!data.success) {
//      // if not successful, bind errors to error variables
//      $scope.errorName = data.errors.name;
//      $scope.errorSuperhero = data.errors.superheroAlias;
//    } else {
//      // if successful, bind success message to message
//      $scope.message = data.message;
//    }
  });
        
         

    }
    
    
}
    
    
    app.controller('ContactController',ContactController);
})();
