angular.module('app').controller('UserViewCtrl', function($scope, $http, $location, $routeParams) {
    $scope.title = "View User";

    var id = $routeParams.id;
	
    $http.get('/api/user/' + id)
	.then(function(response) {
        $scope.user = response.data;
    });

    $scope.delete = function() {
		
        $http.delete('/api/user/' + id)
		.then(function(response){
            $scope.user = response.data;
            $location.path('/users/list');
            toastr.success('User deleted successfully!');
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/users/edit/' + id);
    }
});