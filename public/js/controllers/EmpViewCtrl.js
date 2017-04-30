angular.module('app').controller('EmpViewCtrl', function($scope, $http, $location, $routeParams) {

    $scope.title = "View Employee";

    var id = $routeParams.id;
	
    $http.get('/api/emp/' + id)
	.then(function(response) {
        $scope.emp = response.data;
    });

    $scope.delete = function() {
		
        $http.delete('/api/emp/' + id)
		.then(function(response){
            $scope.emp = response.data;
            $location.path('/emps/list');
            toastr.success('Employee deleted successfully!');
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/emps/edit/' + id);
    }
});