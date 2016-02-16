var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope){
	$scope.friends = ["john", "steven", "emma", "lauren"];
	$scope.addFriend = function() {
		$scope.friends.push($scope.input);
	}
});