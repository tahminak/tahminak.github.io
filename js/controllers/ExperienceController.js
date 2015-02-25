(function (){
    
'use strict';

var app= angular.module("myResumeApp");
    
    
    
var ExperienceController=function ($scope){
    
    
    $scope.testClick=function (){
        
        console.log("Testing click");
    };
    console.log("In ExperienceController controller");
    
}
    
    
    app.controller('ExperienceController',ExperienceController);
})();