angular.module('app').controller('EmpEditCtrl', function($scope, $http, $location, $routeParams) {
    
	$scope.title = "Edit Employee";

    var id = $routeParams.id;

    $http.get('/api/emp/' + id)
	.then(function(response) {
        $scope.emp = response.data;
    });

    $scope.cancel = function() {
        $location.path('/emps/view/' + id);
    };

    $scope.update = function() {
        $http.put('/api/emp/' + $scope.emp._id, $scope.emp)
		.then(function(response) {
            $scope.emp = response.data;
            $location.path('/emps/list');
            toastr.success('Employee updated successfully!');
        })
    };
});