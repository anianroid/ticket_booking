'use strict';

angular.module('myApp.view1', ['ngRoute'])



.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.filter('range', function() {
  return function(input, total) {
    total = parseInt(total);

    for (var i=0; i<total; i++) {
      input.push(i);
    }

    return input;
  };
})


.controller('View1Ctrl',['$scope',function($scope) {
	$scope.case = true;
	$scope.seatnos = [];
	$scope.selected = [];
	$scope.count = function(i){
		var y = 0;
		for (var x=0;x<$scope.seatnos.length;x++){
			if($scope.seatnos[x] == i){
				console.log(i);
				y++;
			}
		}
		if(y==0){
			$scope.seatnos.push(i);
			$scope.selected.push(i);
			$scope.noseats = $scope.selected.length;
		}
	}
	$scope.bookings = [];
	$scope.book = function(name){
		//$scope.noseats = $scope.selected.length;
		if($scope.selected){
			$scope.bookings.push({name: $scope.name, seatnos: $scope.selected, noseats: $scope.noseats});
			console.log($scope.bookings);
			$scope.name = "";
		}
		$scope.selected = [];
		$scope.noseats = 0;
		console.log($scope.bookings.seatnos);
	};

}]);