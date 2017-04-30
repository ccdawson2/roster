angular.module('app').controller('ClientEditCtrl', function($scope, $http, $location, $routeParams) {
    
	$scope.title = "Edit Client";

    var id = $routeParams.id;

    $http.get('/api/client/' + id)
	.then(function(response) {
        $scope.client = response.data;
    });

    $scope.cancel = function() {
        $location.path('/clients/view/' + id);
    };

    $scope.update = function() {
        $http.put('/api/client/' + $scope.client._id, $scope.client)
		.then(function(response) {
            $scope.client = response.data;
            $location.path('/clients/list');
            toastr.success('Client updated successfully!');
        })
    };
});