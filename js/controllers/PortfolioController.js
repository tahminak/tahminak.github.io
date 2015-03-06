


(function (){
    
'use strict';

var app= angular.module("myResumeApp");
    
    
    
var PortfolioController=function ($scope,$http){
    
    $scope.projects;
    
   console.log("In Portfolio controller");
   
   $http.get('projects.json').success(function (data){
       
       $scope.projects=data;
       
       console.log(data);
   });
    
    
}
    
    
    app.controller('PortfolioController',PortfolioController);
})();


