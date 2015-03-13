


(function (){
    
'use strict';

var app= angular.module("myResumeApp");
    
    
    
var PortfolioController=function ($scope,$http){
    
    $scope.projects;
    
   
    
   console.log("In Portfolio controller");
   
   //Read data from project.json
   $http.get('projects.json').success(function (data){
       
       //Store project data to the scope object
       $scope.projects=data;
       
       console.log(data);
   });
    
    
}
    
    
    app.controller('PortfolioController',PortfolioController);
})();


