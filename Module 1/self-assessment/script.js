var dateApp = angular.module('dateApp', []);
			dateApp.constant('stamp', new Date().toUTCString());
			dateApp.controller('main', ['$scope','stamp',
			function($scope, stamp){
				$scope.date = stamp;
			}]);