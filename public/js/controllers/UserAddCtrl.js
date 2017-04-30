angular.module('app').controller('UserAddCtrl', function($scope, $http, $location) {

   $scope.title = "Add User";

   $http.get('/api/roles')
	.then(function(response) {
		 var tmp = [];
         console.log(response);

         for(var o in response.data) {
		    tmp.push(response.data[o].code);}

   		 $scope.roles = tmp;
		 $scope.selectedRole = tmp[1];
    })

    $scope.saveuser = function() {

		$scope.user.role = $scope.selectedRole;
		
        $http.post('/api/user', $scope.user)
		.then(function(data) {
            $scope.user = data;
            $location.path('/users/list');
            toastr.success('User added successfully!');
        });  
    }; 

});