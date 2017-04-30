angular.module('app').controller('ClientAddCtrl', function($scope, $http, $location) {

    $scope.title = "Add Client";

    $scope.saveclient = function() {
		
		console.log('DEBUG: ClientAddCtrl : saveclient(): ' + $scope.client);
		
        $http.post('/api/client', $scope.client)
		.then(function(data) {
            $scope.client = data;
            $location.path('/clients/list');
            toastr.success('Client added successfully!');
        });  
    }; 
});