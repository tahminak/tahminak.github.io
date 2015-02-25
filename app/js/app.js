
(function (){

'use strict';

// Declare app level module which depends on views, and components
var app=angular.module('myResumeApp', ['ngRoute']);



app.config(function($routeProvider) {
			$routeProvider.when("/About", {
				templateUrl : "templates/about.html",
				controller : "AboutController"
			}).when("/Skills",{
                            
                                templateUrl : "templates/skills.html",
				controller : "SkillsController"
                        }).when("/Education",{
                            
                                templateUrl : "templates/education.html",
				controller : "EducationController"
                        }).when("/Contact",{
                            
                                templateUrl : "templates/contact.html",
				controller : "ContactController"
                        }).when("/Experience",{
                            
                                templateUrl : "templates/experience.html",
				controller : "ExperienceController"
                        }).when("/Portfolio",{
                            
                                templateUrl : "templates/portfolio.html",
				controller : "PortfolioController"
                        }).otherwise({
				redirectTo : "/About"
			});

});


//This controller is keeping track of the active view, and changing the
// link class to active accordingly

app.controller('NavController', 
['$scope', '$location', function ($scope, $location) {  
  $scope.navClass = function (page) {
    var currentRoute = $location.path().substring(1) || 'About';
    return page === currentRoute ? 'active' : '';
  };
}]);



//Adding timelineJS directive to the app
app.directive('timelineJs',  function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          var  postpone = $timeout(function() {
               createStoryJS({
            type:  'timeline',
            width: '100%',
            height: '600',
            source: 'experience.json',
            embed_id: 'timeline-embed', //OPTIONAL USE A DIFFERENT DIV ID FOR EMBED
            start_at_end: true, //OPTIONAL START AT LATEST DATE
            start_at_slide: '0', //OPTIONAL START AT SPECIFIC SLIDE
            start_zoom_adjust: '1', //OPTIONAL TWEAK THE DEFAULT ZOOM LEVEL
            hash_bookmark: false, //OPTIONAL LOCATION BAR HASHES
            font: 'Rancho-Gudea', //OPTIONAL FONT
            debug: true, //OPTIONAL DEBUG TO CONSOLE
            lang: 'en', //OPTIONAL LANGUAGE
            maptype: 'watercolor', //OPTIONAL MAP STYLE
            css: 'components/timeline/css/timeline.css', //OPTIONAL PATH TO CSS
            js: 'components/timeline/js/timeline.js'    //OPTIONAL PATH TO JS
            });
            }, 0);
            console.log("Running timelineJS");
        }
    }
});

app.controller('indexControlles',function ($scope){
    
    $scope.testClick=function (){
        console.log("Testing click");
    }
});
})();