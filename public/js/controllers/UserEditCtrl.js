angular.module('app').controller('UserEditCtrl', function($scope, $http, $location, $routeParams) {
   
    var id = $routeParams.id;
   
	$scope.title = "Edit User";

    $http.get('/api/roles')
	.then(function(response) {
		 var tmp = [];

         for(var o in response.data) {
		    tmp.push(response.data[o].code);}

   		 $scope.roles = tmp;
    })
   
    $http.get('/api/user/' + id)
	.then(function(response) {
        $scope.user = response.data;
   	    $scope.selectedRole = $scope.user.role;
    });

    $scope.cancel = function() {
        $location.path('/users/view/' + id);
    };

    $scope.update = function() {

		$scope.user.role = $scope.selectedRole;
				
        $http.put('/api/user/' + $scope.user._id, $scope.user)
		.then(function(response) {
            $scope.user = response.data;
            $location.path('/users/list');
            toastr.success('User updated successfully!');
        })
    };
});