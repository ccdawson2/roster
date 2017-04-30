angular.module('app').controller('UserListCtrl', function($scope, $http, $location) {

    $scope.title = "List Users";

    $http.get('/api/users')
	.then(function(response) {
		 
		 $scope.users = response.data;
    })
	
    $scope.adduser = function() {

        $location.path('/users/add');		
    };
	
    $scope.sortKey = "-_id";
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;
    };

    $scope.view = function(id) {
        $location.path('/users/view/' + id);
    };
});