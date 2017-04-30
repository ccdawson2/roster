angular.module('app').controller('ClientViewCtrl', function($scope, $http, $location, $routeParams) {

    $scope.title = "View Client";

    var id = $routeParams.id;
	
    $http.get('/api/client/' + id)
	.then(function(response) {
        $scope.client = response.data;
    });

    $scope.delete = function() {
		
        $http.delete('/api/client/' + id)
		.then(function(response){
            $scope.client = response.data;
            $location.path('/clients/list');
            toastr.success('Client deleted successfully!');
        });

        $('.modal-backdrop').hide();
    };

    $scope.edit = function() {
        $location.path('/clients/edit/' + id);
    }
});